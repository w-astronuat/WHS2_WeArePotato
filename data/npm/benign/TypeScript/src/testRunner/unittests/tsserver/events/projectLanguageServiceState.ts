import * as ts from "../../../_namespaces/ts.js";
import { jsonToReadableText } from "../../helpers.js";
import {
    baselineTsserverLogs,
    openFilesForSession,
    TestSession,
} from "../../helpers/tsserver.js";
import {
    createServerHost,
    File,
    libFile,
} from "../../helpers/virtualFileSystemWithWatch.js";

describe("unittests:: tsserver:: events:: ProjectLanguageServiceStateEvent", () => {
    it("language service disabled events are triggered", () => {
        const f1 = {
            path: "/a/app.js",
            content: "let x = 1;",
        };
        const f2 = {
            path: "/a/largefile.js",
            content: "",
        };
        const config = {
            path: "/a/jsconfig.json",
            content: "{}",
        };
        const configWithExclude = {
            path: config.path,
            content: jsonToReadableText({ exclude: ["largefile.js"] }),
        };
        const host = createServerHost([f1, f2, config]);
        const originalGetFileSize = host.getFileSize;
        host.getFileSize = (filePath: string) => filePath === f2.path ? ts.server.maxProgramSizeForNonTsFiles + 1 : originalGetFileSize.call(host, filePath);

        const session = new TestSession(host);
        openFilesForSession([f1], session);
        session.logger.log(`Language service enabled: ${session.getProjectService().configuredProjects.get(config.path)!.languageServiceEnabled}`);

        host.writeFile(configWithExclude.path, configWithExclude.content);
        host.runQueuedTimeoutCallbacks();
        session.logger.log(`Language service enabled: ${session.getProjectService().configuredProjects.get(config.path)!.languageServiceEnabled}`);
        baselineTsserverLogs("events/projectLanguageServiceState", "language service disabled events are triggered", session);
    });

    it("Large file size is determined correctly", () => {
        const f1: File = {
            path: "/a/app.js",
            content: "let x = 1;",
        };
        const f2: File = {
            path: "/a/largefile.js",
            content: "",
            fileSize: ts.server.maxProgramSizeForNonTsFiles + 1,
        };
        const f3: File = {
            path: "/a/extremlylarge.d.ts",
            content: "",
            fileSize: ts.server.maxProgramSizeForNonTsFiles + 100,
        };
        const config = {
            path: "/a/jsconfig.json",
            content: "{}",
        };
        const host = createServerHost([f1, f2, f3, libFile, config]);
        const session = new TestSession(host);
        openFilesForSession([f1], session);
        const project = session.getProjectService().configuredProjects.get(config.path)!;
        session.logger.info(`languageServiceEnabled: ${project.languageServiceEnabled}`);
        session.logger.info(`lastFileExceededProgramSize: ${project.lastFileExceededProgramSize}`);
        baselineTsserverLogs("events/projectLanguageServiceState", "large file size is determined correctly", session);
    });
});
