currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/packages/app/index.ts]
dep

//// [/packages/app/tsconfig.json]
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": { "outDir": "../../dist/packages/app" },
  "references": [{ "path": "../dep" }]
}

//// [/packages/app/utils.ts]
import "packages/dep";

//// [/packages/dep/index.ts]
import "./sub/folder";

//// [/packages/dep/sub/folder/index.ts]
export const dep = 0;

//// [/packages/dep/tsconfig.json]
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": { "outDir": "../../dist/packages/dep" }
}

//// [/tsconfig.base.json]
{
  "compilerOptions": {
    "module": "commonjs",
    "baseUrl": ".",
    "paths": {
      "packages/*": ["./packages/*"]
    }
  }
}


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/tsconfig.base.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /tsconfig.base.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/tsconfig.base.json SVC-1-0 "{\n  \"compilerOptions\": {\n    \"module\": \"commonjs\",\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"packages/*\": [\"./packages/*\"]\n    }\n  }\n}"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	tsconfig.base.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.base.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/tsconfig.base.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /packages/app/index.ts ProjectRootPath: undefined:: Result: /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/app/tsconfig.json 2000 undefined Project: /packages/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/packages/app/tsconfig.json",
        "reason": "Creating possible configured project for /packages/app/index.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /packages/app/tsconfig.json : {
 "rootNames": [
  "/packages/app/index.ts",
  "/packages/app/utils.ts"
 ],
 "options": {
  "module": 1,
  "baseUrl": "/",
  "paths": {
   "packages/*": [
    "./packages/*"
   ]
  },
  "pathsBasePath": "/",
  "outDir": "/dist/packages/app",
  "configFilePath": "/packages/app/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/packages/dep",
   "originalPath": "../dep"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.base.json 2000 undefined Config: /packages/app/tsconfig.json WatchType: Extended config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/app 1 undefined Config: /packages/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/app 1 undefined Config: /packages/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/app/utils.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /packages/dep/tsconfig.json : {
 "rootNames": [
  "/packages/dep/index.ts",
  "/packages/dep/sub/folder/index.ts"
 ],
 "options": {
  "module": 1,
  "baseUrl": "/",
  "paths": {
   "packages/*": [
    "./packages/*"
   ]
  },
  "pathsBasePath": "/",
  "outDir": "/dist/packages/dep",
  "configFilePath": "/packages/dep/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/tsconfig.json 2000 undefined Project: /packages/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/dep 1 undefined Config: /packages/dep/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/dep 1 undefined Config: /packages/dep/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/dep/sub 1 undefined Project: /packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/dep/sub 1 undefined Project: /packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/sub/folder/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/sub/folder/package.json 2000 undefined Project: /packages/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/sub/package.json 2000 undefined Project: /packages/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /packages/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/packages/app/index.ts SVC-1-0 "dep"
	/packages/dep/sub/folder/index.ts Text-1 "export const dep = 0;"
	/packages/dep/index.ts Text-1 "import \"./sub/folder\";"
	/packages/app/utils.ts Text-1 "import \"packages/dep\";"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	index.ts
	  Matched by default include pattern '**/*'
	../dep/sub/folder/index.ts
	  Imported via "./sub/folder" from file '../dep/index.ts'
	../dep/index.ts
	  Imported via "packages/dep" from file 'utils.ts'
	utils.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/packages/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/packages/app/index.ts",
        "configFile": "/packages/app/tsconfig.json",
        "diagnostics": [
          {
            "start": {
              "line": 4,
              "offset": 18
            },
            "end": {
              "line": 4,
              "offset": 38
            },
            "text": "Referenced project '/packages/dep' must have setting \"composite\": true.",
            "code": 6306,
            "category": "error",
            "fileName": "/packages/app/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (7)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.base.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /packages/app/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /packages/app/tsconfig.json
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/packages/app/tsconfig.json: *new*
  {"pollingInterval":2000}
/packages/app/utils.ts: *new*
  {"pollingInterval":500}
/packages/dep/index.ts: *new*
  {"pollingInterval":500}
/packages/dep/sub/folder/index.ts: *new*
  {"pollingInterval":500}
/packages/dep/sub/folder/package.json: *new*
  {"pollingInterval":2000}
/packages/dep/sub/package.json: *new*
  {"pollingInterval":2000}
/packages/dep/tsconfig.json: *new*
  {"pollingInterval":2000}
/tsconfig.base.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/packages/app: *new*
  {}
/packages/dep: *new*
  {}
/packages/dep/sub: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json *new*
/packages/app/index.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/app/utils.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/index.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/sub/folder/index.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/tsconfig.base.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 2,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 3,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 4,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'dep'.",
          "start": 0,
          "length": 3,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 4
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 5,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 4,
        "errorCodes": [
          2304
        ]
      },
      "command": "getCodeFixes"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 6,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"packages/dep/sub/folder\"",
          "changes": [
            {
              "fileName": "/packages/app/index.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 1
                  },
                  "end": {
                    "line": 1,
                    "offset": 1
                  },
                  "newText": "import { dep } from \"packages/dep/sub/folder\";\r\n\r\n"
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { dep } from \"packages/dep/sub/folder\";\r\n\r\n"
      },
      "command": "change"
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json
/packages/app/index.ts (Open) *changed*
    version: SVC-1-1 *changed*
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/app/utils.ts
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/index.ts
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/tsconfig.base.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/packages/app/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 3,
        "endOffset": 1,
        "insertString": ""
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject1*
        /packages/app/tsconfig.json
/packages/app/index.ts (Open) *changed*
    version: SVC-1-2 *changed*
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/app/utils.ts
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/index.ts
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/tsconfig.base.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
