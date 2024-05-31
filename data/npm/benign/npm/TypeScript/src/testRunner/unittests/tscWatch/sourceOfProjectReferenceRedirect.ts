import * as ts from "../../_namespaces/ts.js";
import { jsonToReadableText } from "../helpers.js";
import { FsContents } from "../helpers/contents.js";
import { getFsContentsForDemoProjectReferences } from "../helpers/demoProjectReferences.js";
import { solutionBuildWithBaseline } from "../helpers/solutionBuilder.js";
import {
    createBaseline,
    createWatchCompilerHostOfConfigFileForBaseline,
    runWatchBaseline,
} from "../helpers/tscWatch.js";
import {
    createWatchedSystem,
    File,
    FileOrFolderOrSymLink,
    libFile,
    SymLink,
} from "../helpers/virtualFileSystemWithWatch.js";

describe("unittests:: tsc-watch:: watchAPI:: with sourceOfProjectReferenceRedirect", () => {
    interface VerifyWatchInput {
        files: FsContents | readonly FileOrFolderOrSymLink[];
        config: string;
        subScenario: string;
    }

    function verifyWatch({ files, config, subScenario }: VerifyWatchInput, alreadyBuilt: boolean) {
        const { sys, baseline, cb, getPrograms } = createBaseline(
            createWatchedSystem(files),
            alreadyBuilt ? (sys, originalRead) => {
                solutionBuildWithBaseline(sys, [config], originalRead);
                sys.clearOutput();
            } : undefined,
        );
        const host = createWatchCompilerHostOfConfigFileForBaseline({
            configFileName: config,
            system: sys,
            cb,
        });
        host.useSourceOfProjectReferenceRedirect = ts.returnTrue;
        const watch = ts.createWatchProgram(host);
        runWatchBaseline({
            scenario: "sourceOfProjectReferenceRedirect",
            subScenario: `${subScenario}${alreadyBuilt ? " when solution is already built" : ""}`,
            commandLineArgs: ["--w", "--p", config],
            sys,
            baseline,
            getPrograms,
            watchOrSolution: watch,
            useSourceOfProjectReferenceRedirect: ts.returnTrue,
        });
    }

    function verifyScenario(input: () => VerifyWatchInput) {
        it("when solution is not built", () => {
            verifyWatch(input(), /*alreadyBuilt*/ false);
        });

        it("when solution is already built", () => {
            verifyWatch(input(), /*alreadyBuilt*/ true);
        });
    }

    describe("with simple project", () => {
        verifyScenario(() => {
            return {
                files: getFsContentsForDemoProjectReferences(),
                config: "/user/username/projects/demo/animals/tsconfig.json",
                subScenario: "with simple project",
            };
        });
    });

    describe("when references are monorepo like with symlinks", () => {
        interface Packages {
            bPackageJson: File;
            aTest: File;
            bFoo: File;
            bBar: File;
            bSymlink: SymLink;
            subScenario: string;
        }
        function verifySymlinkScenario(packages: () => Packages) {
            describe("when preserveSymlinks is turned off", () => {
                verifySymlinkScenarioWorker(packages, {});
            });
            describe("when preserveSymlinks is turned on", () => {
                verifySymlinkScenarioWorker(packages, { preserveSymlinks: true });
            });
        }

        function verifySymlinkScenarioWorker(packages: () => Packages, extraOptions: ts.CompilerOptions) {
            verifyScenario(() => {
                const { bPackageJson, aTest, bFoo, bBar, bSymlink, subScenario } = packages();
                const aConfig = config("A", extraOptions, ["../B"]);
                const bConfig = config("B", extraOptions);
                return {
                    files: [libFile, bPackageJson, aConfig, bConfig, aTest, bFoo, bBar, bSymlink],
                    config: aConfig.path,
                    subScenario: `${subScenario}${extraOptions.preserveSymlinks ? " with preserveSymlinks" : ""}`,
                };
            });
        }

        function config(packageName: string, extraOptions: ts.CompilerOptions, references?: string[]): File {
            return {
                path: `/user/username/projects/myproject/packages/${packageName}/tsconfig.json`,
                content: jsonToReadableText({
                    compilerOptions: {
                        outDir: "lib",
                        rootDir: "src",
                        composite: true,
                        ...extraOptions,
                    },
                    include: ["src"],
                    ...(references ? { references: references.map(path => ({ path })) } : {}),
                }),
            };
        }

        function file(packageName: string, fileName: string, content: string): File {
            return {
                path: `/user/username/projects/myproject/packages/${packageName}/src/${fileName}`,
                content,
            };
        }

        function verifyMonoRepoLike(scope = "") {
            describe("when packageJson has types field", () => {
                verifySymlinkScenario(() => ({
                    bPackageJson: {
                        path: `/user/username/projects/myproject/packages/B/package.json`,
                        content: jsonToReadableText({
                            main: "lib/index.js",
                            types: "lib/index.d.ts",
                        }),
                    },
                    aTest: file(
                        "A",
                        "index.ts",
                        `import { foo } from '${scope}b';
import { bar } from '${scope}b/lib/bar';
foo();
bar();
`,
                    ),
                    bFoo: file("B", "index.ts", `export function foo() { }`),
                    bBar: file("B", "bar.ts", `export function bar() { }`),
                    bSymlink: {
                        path: `/user/username/projects/myproject/node_modules/${scope}b`,
                        symLink: `/user/username/projects/myproject/packages/B`,
                    },
                    subScenario: `when packageJson has types field${scope ? " with scoped package" : ""}`,
                }));
            });

            describe("when referencing file from subFolder", () => {
                verifySymlinkScenario(() => ({
                    bPackageJson: {
                        path: `/user/username/projects/myproject/packages/B/package.json`,
                        content: "{}",
                    },
                    aTest: file(
                        "A",
                        "test.ts",
                        `import { foo } from '${scope}b/lib/foo';
import { bar } from '${scope}b/lib/bar/foo';
foo();
bar();
`,
                    ),
                    bFoo: file("B", "foo.ts", `export function foo() { }`),
                    bBar: file("B", "bar/foo.ts", `export function bar() { }`),
                    bSymlink: {
                        path: `/user/username/projects/myproject/node_modules/${scope}b`,
                        symLink: `/user/username/projects/myproject/packages/B`,
                    },
                    subScenario: `when referencing file from subFolder${scope ? " with scoped package" : ""}`,
                }));
            });
        }
        describe("when package is not scoped", () => {
            verifyMonoRepoLike();
        });
        describe("when package is scoped", () => {
            verifyMonoRepoLike("@issue/");
        });
    });
});
