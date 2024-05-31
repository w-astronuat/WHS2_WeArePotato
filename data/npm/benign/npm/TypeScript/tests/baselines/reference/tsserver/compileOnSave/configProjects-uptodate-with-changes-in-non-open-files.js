currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/a/b/moduleFile1.ts]
export function Foo() { };

//// [/a/b/file1Consumer1.ts]
import {Foo} from "./moduleFile1"; export var y = 10;

//// [/a/b/file1Consumer2.ts]
import {Foo} from "./moduleFile1"; let z = 10;

//// [/a/b/globalFile3.ts]
interface GlobalFoo { age: number }

//// [/a/b/moduleFile2.ts]
export var Foo4 = 10;

//// [/a/b/tsconfig.json]
{
                        "compileOnSave": true
                    }

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
        "file": "/a/b/moduleFile1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a/b/moduleFile1.ts ProjectRootPath: undefined:: Result: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/a/b/tsconfig.json",
        "reason": "Creating possible configured project for /a/b/moduleFile1.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/file1Consumer1.ts",
  "/a/b/file1Consumer2.ts",
  "/a/b/globalFile3.ts",
  "/a/b/moduleFile1.ts",
  "/a/b/moduleFile2.ts"
 ],
 "options": {
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/file1Consumer1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/file1Consumer2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/globalFile3.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/b/moduleFile2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/b/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/a/b/moduleFile1.ts SVC-1-0 "export function Foo() { };"
	/a/b/file1Consumer1.ts Text-1 "import {Foo} from \"./moduleFile1\"; export var y = 10;"
	/a/b/file1Consumer2.ts Text-1 "import {Foo} from \"./moduleFile1\"; let z = 10;"
	/a/b/globalFile3.ts Text-1 "interface GlobalFoo { age: number }"
	/a/b/moduleFile2.ts Text-1 "export var Foo4 = 10;"


	../lib/lib.d.ts
	  Default library for target 'es5'
	moduleFile1.ts
	  Imported via "./moduleFile1" from file 'file1Consumer1.ts'
	  Imported via "./moduleFile1" from file 'file1Consumer2.ts'
	  Matched by default include pattern '**/*'
	file1Consumer1.ts
	  Matched by default include pattern '**/*'
	file1Consumer2.ts
	  Matched by default include pattern '**/*'
	globalFile3.ts
	  Matched by default include pattern '**/*'
	moduleFile2.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/a/b/tsconfig.json"
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
          "projectId": "e10a1dc99ee63f16cb9b69bcee75540cdf41a1137371d3afbd4e7de507be5207",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 5,
            "tsSize": 181,
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
          "compileOnSave": true,
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
        "triggerFile": "/a/b/moduleFile1.ts",
        "configFile": "/a/b/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/moduleFile1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

FsWatches::
/a/b/file1Consumer1.ts: *new*
  {}
/a/b/file1Consumer2.ts: *new*
  {}
/a/b/globalFile3.ts: *new*
  {}
/a/b/moduleFile2.ts: *new*
  {}
/a/b/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

Projects::
/a/b/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/b/file1Consumer1.ts *new*
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/file1Consumer2.ts *new*
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/globalFile3.ts *new*
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/moduleFile1.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /a/b/tsconfig.json *default*
/a/b/moduleFile2.ts *new*
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "projectFileName": "/a/b/tsconfig.json"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "projectFileName": "/a/b/tsconfig.json",
          "fileNames": [
            "/a/b/moduleFile1.ts",
            "/a/b/file1Consumer2.ts",
            "/a/b/file1Consumer1.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
After request

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /a/b/file1Consumer1.ts 1:: WatchInfo: /a/b/file1Consumer1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /a/b/file1Consumer1.ts 1:: WatchInfo: /a/b/file1Consumer1.ts 500 undefined WatchType: Closed Script info
Before request
//// [/a/b/file1Consumer1.ts]
let y = 10;


Timeout callback:: count: 2
1: /a/b/tsconfig.json *new*
2: *ensureProjectForOpenFiles* *new*

Projects::
/a/b/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/a/b/file1Consumer1.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/file1Consumer2.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/globalFile3.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/moduleFile1.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /a/b/tsconfig.json *default*
/a/b/moduleFile2.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "change",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "export var T: number;"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

ScriptInfos::
/a/b/file1Consumer1.ts
    version: Text-1
    pendingReloadFromDisk: true
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/file1Consumer2.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/globalFile3.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/moduleFile1.ts (Open) *changed*
    version: SVC-1-1 *changed*
    containingProjects: 1
        /a/b/tsconfig.json *default*
/a/b/moduleFile2.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "projectFileName": "/a/b/tsconfig.json"
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/b/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/a/b/file1Consumer1.ts Text-2 "let y = 10;"
	/a/b/moduleFile1.ts SVC-1-1 "export var T: number;export function Foo() { };"
	/a/b/file1Consumer2.ts Text-1 "import {Foo} from \"./moduleFile1\"; let z = 10;"
	/a/b/globalFile3.ts Text-1 "interface GlobalFoo { age: number }"
	/a/b/moduleFile2.ts Text-1 "export var Foo4 = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "projectFileName": "/a/b/tsconfig.json",
          "fileNames": [
            "/a/b/moduleFile1.ts",
            "/a/b/file1Consumer2.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
After request

Projects::
/a/b/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

ScriptInfos::
/a/b/file1Consumer1.ts *changed*
    version: Text-2 *changed*
    pendingReloadFromDisk: false *changed*
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/file1Consumer2.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/globalFile3.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/b/moduleFile1.ts (Open)
    version: SVC-1-1
    containingProjects: 1
        /a/b/tsconfig.json *default*
/a/b/moduleFile2.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /a/b/tsconfig.json
