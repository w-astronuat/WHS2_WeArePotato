import { dedent } from "../../_namespaces/Utils.js";
import { jsonToReadableText } from "../helpers.js";
import { libContent } from "../helpers/contents.js";
import { verifyTscWatch } from "../helpers/tscWatch.js";
import {
    createWatchedSystem,
    libFile,
} from "../helpers/virtualFileSystemWithWatch.js";

describe("unittests:: tsbuildWatch:: watchMode:: with reexport when referenced project reexports definitions from another file", () => {
    verifyTscWatch({
        scenario: "reexport",
        subScenario: "Reports errors correctly",
        commandLineArgs: ["-b", "-w", "-verbose", "src"],
        sys: () =>
            createWatchedSystem({
                "/user/username/projects/reexport/src/tsconfig.json": jsonToReadableText({
                    files: [],
                    include: [],
                    references: [{ path: "./pure" }, { path: "./main" }],
                }),
                "/user/username/projects/reexport/src/main/tsconfig.json": jsonToReadableText({
                    compilerOptions: {
                        outDir: "../../out",
                        rootDir: "../",
                    },
                    include: ["**/*.ts"],
                    references: [{ path: "../pure" }],
                }),
                "/user/username/projects/reexport/src/main/index.ts": dedent`
                    import { Session } from "../pure";

                    export const session: Session = {
                        foo: 1
                    };
                `,
                "/user/username/projects/reexport/src/pure/tsconfig.json": jsonToReadableText({
                    compilerOptions: {
                        composite: true,
                        outDir: "../../out",
                        rootDir: "../",
                    },
                    include: ["**/*.ts"],
                }),
                "/user/username/projects/reexport/src/pure/index.ts": `export * from "./session";\n`,
                "/user/username/projects/reexport/src/pure/session.ts": dedent`
                    export interface Session {
                        foo: number;
                        // bar: number;
                    }
                `,
                [libFile.path]: libContent,
            }, { currentDirectory: `/user/username/projects/reexport` }),
        edits: [
            {
                caption: "Introduce error",
                edit: sys => sys.replaceFileText(`/user/username/projects/reexport/src/pure/session.ts`, "// ", ""),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // build src/pure
                    sys.runQueuedTimeoutCallbacks(); // build src/main and src
                },
            },
            {
                caption: "Fix error",
                edit: sys => sys.replaceFileText(`/user/username/projects/reexport/src/pure/session.ts`, "bar: ", "// bar: "),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // build src/pure
                    sys.runQueuedTimeoutCallbacks(); // build src/main and src
                },
            },
        ],
    });
});
