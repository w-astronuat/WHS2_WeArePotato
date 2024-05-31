import * as ts from "../../_namespaces/ts.js";
import {
    commonFile1,
    commonFile2,
} from "../helpers/tscWatch.js";
import {
    baselineTsserverLogs,
    TestSession,
} from "../helpers/tsserver.js";
import {
    createServerHost,
    File,
    libFile,
} from "../helpers/virtualFileSystemWithWatch.js";

describe("unittests:: tsserver:: inlayHints", () => {
    const configFile: File = {
        path: "/a/b/tsconfig.json",
        content: "{}",
    };
    const app: File = {
        path: "/a/b/app.ts",
        content: "declare function foo(param: any): void;\nfoo(12);",
    };

    it("with updateOpen request does not corrupt documents", () => {
        const host = createServerHost([app, commonFile1, commonFile2, libFile, configFile]);
        const session = new TestSession(host);
        session.executeCommandSeq<ts.server.protocol.OpenRequest>({
            command: ts.server.protocol.CommandTypes.Open,
            arguments: { file: app.path },
        });
        session.executeCommandSeq<ts.server.protocol.ConfigureRequest>({
            command: ts.server.protocol.CommandTypes.Configure,
            arguments: {
                preferences: {
                    includeInlayParameterNameHints: "all",
                } as ts.UserPreferences,
            },
        });
        verifyInlayHintResponse(session);
        session.executeCommandSeq<ts.server.protocol.UpdateOpenRequest>({
            command: ts.server.protocol.CommandTypes.UpdateOpen,
            arguments: {
                changedFiles: [{ fileName: app.path, textChanges: [{ start: { line: 1, offset: 39 }, end: { line: 1, offset: 39 }, newText: "//" }] }],
            },
        });
        verifyInlayHintResponse(session);
        session.executeCommandSeq<ts.server.protocol.UpdateOpenRequest>({
            command: ts.server.protocol.CommandTypes.UpdateOpen,
            arguments: {
                changedFiles: [{ fileName: app.path, textChanges: [{ start: { line: 1, offset: 41 }, end: { line: 1, offset: 41 }, newText: "c" }] }],
            },
        });
        verifyInlayHintResponse(session);
        baselineTsserverLogs("inlayHints", "with updateOpen request does not corrupt documents", session);

        function verifyInlayHintResponse(session: TestSession) {
            session.executeCommandSeq<ts.server.protocol.InlayHintsRequest>({
                command: ts.server.protocol.CommandTypes.ProvideInlayHints,
                arguments: {
                    file: app.path,
                    start: 0,
                    length: app.content.length,
                },
            });
        }
    });
});
