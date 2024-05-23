import * as ts from "../../_namespaces/ts.js";
import { dedent } from "../../_namespaces/Utils.js";
import { jsonToReadableText } from "../helpers.js";
import {
    getFsConentsForAlternateResultAtTypesPackageJson,
    getFsContentsForAlternateResult,
    getFsContentsForAlternateResultDts,
    getFsContentsForAlternateResultPackageJson,
} from "../helpers/alternateResult.js";
import { libContent } from "../helpers/contents.js";
import { solutionBuildWithBaseline } from "../helpers/solutionBuilder.js";
import {
    baselineTsserverLogs,
    openFilesForSession,
    protocolTextSpanFromSubstring,
    TestSession,
    verifyGetErrRequest,
} from "../helpers/tsserver.js";
import {
    createServerHost,
    File,
    libFile,
} from "../helpers/virtualFileSystemWithWatch.js";

describe("unittests:: tsserver:: moduleResolution", () => {
    describe("package json file is edited", () => {
        function setup(packageFileContents: string) {
            const configFile: File = {
                path: `/user/username/projects/myproject/src/tsconfig.json`,
                content: jsonToReadableText({
                    compilerOptions: {
                        target: "es2016",
                        module: "Node16",
                        outDir: "../out",
                        traceResolution: true,
                    },
                }),
            };
            const packageFile: File = {
                path: `/user/username/projects/myproject/package.json`,
                content: packageFileContents,
            };
            const fileA: File = {
                path: `/user/username/projects/myproject/src/fileA.ts`,
                content: dedent`
                        import { foo } from "./fileB.mjs";
                        foo();
                    `,
            };
            const fileB: File = {
                path: `/user/username/projects/myproject/src/fileB.mts`,
                content: dedent`
                        export function foo() {
                        }
                    `,
            };
            const host = createServerHost([configFile, fileA, fileB, packageFile, { ...libFile, path: "/a/lib/lib.es2016.full.d.ts" }]);
            const session = new TestSession(host);
            openFilesForSession([fileA], session);
            return {
                host,
                session,
                packageFile,
                verifyErr: () => verifyGetErrRequest({ files: [fileA], session }),
            };
        }
        it("package json file is edited", () => {
            const { host, session, packageFile, verifyErr } = setup(jsonToReadableText({ name: "app", version: "1.0.0" }));

            session.logger.info("Modify package json file to add type module");
            host.modifyFile(
                packageFile.path,
                jsonToReadableText({
                    name: "app",
                    version: "1.0.0",
                    type: "module",
                }),
                { ignoreWatches: true },
            );
            host.invokeFsWatches(packageFile.path, "rename", packageFile.path, /*useTildeSuffix*/ undefined); // Create event instead of change
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Modify package json file to remove type module");
            host.writeFile(packageFile.path, packageFile.content);
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Delete package.json");
            host.deleteFile(packageFile.path);
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Modify package json file to add type module");
            host.writeFile(
                packageFile.path,
                jsonToReadableText({
                    name: "app",
                    version: "1.0.0",
                    type: "module",
                }),
            );
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Delete package.json");
            host.deleteFile(packageFile.path);
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            baselineTsserverLogs("moduleResolution", "package json file is edited", session);
        });

        it("package json file is edited when package json with type module exists", () => {
            const { host, session, packageFile, verifyErr } = setup(jsonToReadableText({
                name: "app",
                version: "1.0.0",
                type: "module",
            }));

            session.logger.info("Modify package json file to remove type module");
            host.writeFile(packageFile.path, jsonToReadableText({ name: "app", version: "1.0.0" }));
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Modify package json file to add type module");
            host.writeFile(packageFile.path, packageFile.content);
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Delete package.json");
            host.deleteFile(packageFile.path);
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Modify package json file to without type module");
            host.writeFile(packageFile.path, jsonToReadableText({ name: "app", version: "1.0.0" }));
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            session.logger.info("Delete package.json");
            host.deleteFile(packageFile.path);
            host.runQueuedTimeoutCallbacks(); // Failed lookup updates
            host.runQueuedTimeoutCallbacks(); // Actual update
            verifyErr();

            baselineTsserverLogs("moduleResolution", "package json file is edited when package json with type module exists", session);
        });
    });

    it("alternateResult", () => {
        const host = createServerHost(getFsContentsForAlternateResult());
        const session = new TestSession(host);
        openFilesForSession(["/home/src/projects/project/index.mts"], session);
        verifyGetErrRequest({
            files: ["/home/src/projects/project/index.mts"],
            session,
        });
        host.deleteFile("/home/src/projects/project/node_modules/@types/bar/index.d.ts");
        verifyErrors();
        host.deleteFile("/home/src/projects/project/node_modules/foo/index.d.ts");
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/@types/bar/index.d.ts", getFsContentsForAlternateResultDts("bar"));
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/foo/index.d.ts", getFsContentsForAlternateResultDts("foo"));
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/@types/bar/package.json", getFsConentsForAlternateResultAtTypesPackageJson("bar", /*addTypesCondition*/ true));
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/foo/package.json", getFsContentsForAlternateResultPackageJson("foo", /*addTypes*/ true, /*addTypesCondition*/ true));
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/@types/bar2/package.json", getFsConentsForAlternateResultAtTypesPackageJson("bar2", /*addTypesCondition*/ false));
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/foo2/package.json", getFsContentsForAlternateResultPackageJson("foo2", /*addTypes*/ true, /*addTypesCondition*/ false));
        verifyErrors();
        host.deleteFile("/home/src/projects/project/node_modules/@types/bar2/index.d.ts");
        verifyErrors();
        host.deleteFile("/home/src/projects/project/node_modules/foo2/index.d.ts");
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/@types/bar2/index.d.ts", getFsContentsForAlternateResultDts("bar2"));
        verifyErrors();
        host.writeFile("/home/src/projects/project/node_modules/foo2/index.d.ts", getFsContentsForAlternateResultDts("foo2"));
        verifyErrors();

        baselineTsserverLogs("moduleResolution", "alternateResult", session);

        function verifyErrors() {
            host.runQueuedTimeoutCallbacks();
            host.runQueuedImmediateCallbacks();
            verifyGetErrRequest({
                files: ["/home/src/projects/project/index.mts"],
                session,
            });
        }
    });

    describe("using referenced project", () => {
        it("not built", () => {
            verify();
        });
        it("built", () => {
            verify(/*built*/ true);
        });
        function verify(built?: boolean) {
            const indexContent = dedent`
                import { FOO } from "package-a";
                console.log(FOO);
            `;
            const host = createServerHost({
                "/home/src/projects/project/packages/package-a/package.json": getPackageJson("package-a"),
                "/home/src/projects/project/packages/package-a/tsconfig.json": getTsConfig(),
                "/home/src/projects/project/packages/package-a/src/index.ts": `export * from "./subfolder";`,
                "/home/src/projects/project/packages/package-a/src/subfolder/index.ts": `export const FOO = "bar";`,
                "/home/src/projects/project/packages/package-b/package.json": getPackageJson("package-b"),
                "/home/src/projects/project/packages/package-b/tsconfig.json": getTsConfig([{ path: "../package-a" }]),
                "/home/src/projects/project/packages/package-b/src/index.ts": indexContent,
                "/home/src/projects/project/node_modules/package-a": { symLink: "/home/src/projects/project/packages/package-a" },
                "/home/src/projects/project/node_modules/package-b": { symLink: "/home/src/projects/project/packages/package-b" },
                "/a/lib/lib.es2021.d.ts": libContent,
            }, { currentDirectory: "/home/src/projects/project" });
            if (built) {
                solutionBuildWithBaseline(host, ["packages/package-b"]);
                host.clearOutput();
            }
            const session = new TestSession(host);
            openFilesForSession(["/home/src/projects/project/packages/package-b/src/index.ts"], session);
            verifyGetErrRequest({
                session,
                files: ["/home/src/projects/project/packages/package-b/src/index.ts"],
            });
            const { end } = protocolTextSpanFromSubstring(indexContent, "package-a");
            session.executeCommandSeq<ts.server.protocol.UpdateOpenRequest>({
                command: ts.server.protocol.CommandTypes.UpdateOpen,
                arguments: {
                    changedFiles: [{
                        fileName: "/home/src/projects/project/packages/package-b/src/index.ts",
                        textChanges: [{
                            start: end,
                            end,
                            newText: "X",
                        }],
                    }],
                },
            });
            verifyGetErrRequest({
                session,
                files: ["/home/src/projects/project/packages/package-b/src/index.ts"],
            });
            session.executeCommandSeq<ts.server.protocol.UpdateOpenRequest>({
                command: ts.server.protocol.CommandTypes.UpdateOpen,
                arguments: {
                    changedFiles: [{
                        fileName: "/home/src/projects/project/packages/package-b/src/index.ts",
                        textChanges: [{
                            start: end,
                            end: { ...end, offset: end.offset + 1 },
                            newText: "",
                        }],
                    }],
                },
            });
            verifyGetErrRequest({
                session,
                files: ["/home/src/projects/project/packages/package-b/src/index.ts"],
            });
            baselineTsserverLogs("moduleResolution", `using referenced project${built ? " built" : ""}`, session);
        }
        function getPackageJson(packageName: string) {
            return jsonToReadableText({
                name: packageName,
                version: "1.0.0",
                type: "module",
                main: "build/index.js",
                exports: {
                    ".": "./build/index.js",
                    "./package.json": "./package.json",
                    "./*": ["./build/*/index.js", "./build/*.js"],
                },
            });
        }

        function getTsConfig(references?: object[]) {
            return jsonToReadableText({
                compilerOptions: {
                    allowSyntheticDefaultImports: true,
                    baseUrl: "./",
                    composite: true,
                    declarationMap: true,
                    esModuleInterop: true,
                    lib: ["es2021"],
                    module: "esnext",
                    moduleResolution: "bundler",
                    outDir: "build",
                    rootDir: "./src",
                    target: "ES2021",
                    traceResolution: true,
                    tsBuildInfoFile: "./build/tsconfig.tsbuildinfo",
                },
                include: ["./src/**/*.ts"],
                references,
            });
        }
    });
});
