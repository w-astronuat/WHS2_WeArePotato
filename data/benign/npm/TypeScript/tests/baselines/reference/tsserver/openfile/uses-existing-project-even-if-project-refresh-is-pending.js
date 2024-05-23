currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/user/someuser/projects/myproject/src/a.ts]
export const x = 0;

//// [/user/someuser/projects/myproject/tsconfig.json]
{}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/someuser/projects/myproject/src/a.ts",
        "projectRootPath": "/user/someuser/projects/myproject"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/someuser/projects/myproject/src/a.ts ProjectRootPath: /user/someuser/projects/myproject:: Result: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject/tsconfig.json 2000 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/someuser/projects/myproject/tsconfig.json",
        "reason": "Creating possible configured project for /user/someuser/projects/myproject/src/a.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/someuser/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/someuser/projects/myproject/src/a.ts"
 ],
 "options": {
  "configFilePath": "/user/someuser/projects/myproject/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject 1 undefined Config: /user/someuser/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject 1 undefined Config: /user/someuser/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject/src/package.json 2000 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject/package.json 2000 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/someuser/projects/package.json 2000 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject/node_modules/@types 1 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/projects/myproject/node_modules/@types 1 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/someuser/projects/node_modules/@types 1 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/someuser/projects/node_modules/@types 1 undefined Project: /user/someuser/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/someuser/projects/myproject/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/someuser/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/someuser/projects/myproject/src/a.ts SVC-1-0 "export const x = 0;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/a.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/someuser/projects/myproject/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "9804f62820e0e5e0dfcebc35305e99a01f907731822128c3aba5260a2b5ec7fe",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 19,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/someuser/projects/myproject/src/a.ts",
        "configFile": "/user/someuser/projects/myproject/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/user/someuser/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/someuser/projects/myproject/src/a.ts ProjectRootPath: /user/someuser/projects/myproject
Info seq  [hh:mm:ss:mss] 		Projects: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/someuser/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/someuser/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/someuser/projects/myproject/src/package.json: *new*
  {"pollingInterval":2000}
/user/someuser/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/someuser/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/someuser/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/someuser/projects/myproject: *new*
  {}

Projects::
/user/someuser/projects/myproject/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/someuser/projects/myproject/tsconfig.json
/user/someuser/projects/myproject/src/a.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/someuser/projects/myproject/tsconfig.json *default*

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/someuser/projects/myproject/src/b.ts :: WatchInfo: /user/someuser/projects/myproject 1 undefined Config: /user/someuser/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/someuser/projects/myproject/src/b.ts :: WatchInfo: /user/someuser/projects/myproject 1 undefined Config: /user/someuser/projects/myproject/tsconfig.json WatchType: Wild card directory
Before request
//// [/user/someuser/projects/myproject/src/b.ts]
export {}; declare module "./a" {  export const y: number; }


Timeout callback:: count: 2
1: /user/someuser/projects/myproject/tsconfig.json *new*
2: *ensureProjectForOpenFiles* *new*

Projects::
/user/someuser/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/someuser/projects/myproject/src/b.ts",
        "projectRootPath": "/user/someuser/projects/myproject"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/someuser/projects/myproject/src/b.ts ProjectRootPath: /user/someuser/projects/myproject:: Result: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/someuser/projects/myproject/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/someuser/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/someuser/projects/myproject/src/a.ts SVC-1-0 "export const x = 0;"
	/user/someuser/projects/myproject/src/b.ts SVC-1-0 "export {}; declare module \"./a\" {  export const y: number; }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/a.ts
	  Matched by default include pattern '**/*'
	src/b.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/someuser/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/someuser/projects/myproject/src/a.ts ProjectRootPath: /user/someuser/projects/myproject
Info seq  [hh:mm:ss:mss] 		Projects: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/someuser/projects/myproject/src/b.ts ProjectRootPath: /user/someuser/projects/myproject
Info seq  [hh:mm:ss:mss] 		Projects: /user/someuser/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Projects::
/user/someuser/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/someuser/projects/myproject/tsconfig.json
/user/someuser/projects/myproject/src/a.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/someuser/projects/myproject/tsconfig.json *default*
/user/someuser/projects/myproject/src/b.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/someuser/projects/myproject/tsconfig.json *default*
