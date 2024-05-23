currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/packages/app/node_modules/dep] symlink(/packages/dep)
//// [/packages/app/package.json]
{ "name": "app", "dependencies": { "dep": "*" } }

//// [/packages/app/src/index.ts]
dep

//// [/packages/app/tsconfig.json]
{
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "baseUrl": "."
  }
  "references": [{ "path": "../dep" }]
}

//// [/packages/dep/package.json]
{ "name": "dep", "main": "dist/index.js", "types": "dist/index.d.ts" }

//// [/packages/dep/src/index.ts]
import "./sub/folder";

//// [/packages/dep/src/sub/folder/index.ts]
export const dep = 0;

//// [/packages/dep/tsconfig.json]
{
  "compilerOptions": { "outDir": "dist", "rootDir": "src", "module": "commonjs" }
}


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/packages/app/package.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /packages/app/package.json ProjectRootPath: undefined:: Result: /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/app/tsconfig.json 2000 undefined Project: /packages/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/packages/app/tsconfig.json",
        "reason": "Creating possible configured project for /packages/app/package.json to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /packages/app/tsconfig.json : {
 "rootNames": [
  "/packages/app/src/index.ts"
 ],
 "options": {
  "module": 1,
  "outDir": "/packages/app/dist",
  "rootDir": "/packages/app/src",
  "baseUrl": "/packages/app",
  "configFilePath": "/packages/app/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/packages/dep",
   "originalPath": "../dep"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/app 1 undefined Config: /packages/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/app 1 undefined Config: /packages/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/app/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /packages/dep/tsconfig.json : {
 "rootNames": [
  "/packages/dep/src/index.ts",
  "/packages/dep/src/sub/folder/index.ts"
 ],
 "options": {
  "outDir": "/packages/dep/dist",
  "rootDir": "/packages/dep/src",
  "module": 1,
  "configFilePath": "/packages/dep/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/tsconfig.json 2000 undefined Project: /packages/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/dep 1 undefined Config: /packages/dep/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/dep 1 undefined Config: /packages/dep/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /packages/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/packages/app/src/index.ts Text-1 "dep"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	src/index.ts
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
        "triggerFile": "/packages/app/package.json",
        "configFile": "/packages/app/tsconfig.json",
        "diagnostics": [
          {
            "start": {
              "line": 8,
              "offset": 18
            },
            "end": {
              "line": 8,
              "offset": 38
            },
            "text": "Referenced project '/packages/dep' must have setting \"composite\": true.",
            "code": 6306,
            "category": "error",
            "fileName": "/packages/app/tsconfig.json"
          },
          {
            "start": {
              "line": 8,
              "offset": 3
            },
            "end": {
              "line": 8,
              "offset": 15
            },
            "text": "',' expected.",
            "code": 1005,
            "category": "error",
            "fileName": "/packages/app/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Creating configuration project /packages/dep/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/packages/dep/tsconfig.json",
        "reason": "Creating project referenced in solution /packages/app/tsconfig.json to find possible configured project for /packages/app/package.json to open"
      }
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/sub/folder/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /packages/dep/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/dep/src 1 undefined Project: /packages/dep/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/dep/src 1 undefined Project: /packages/dep/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/sub/folder/package.json 2000 undefined Project: /packages/dep/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/sub/package.json 2000 undefined Project: /packages/dep/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/package.json 2000 undefined Project: /packages/dep/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /packages/dep/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/packages/dep/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/packages/dep/src/sub/folder/index.ts Text-1 "export const dep = 0;"
	/packages/dep/src/index.ts Text-1 "import \"./sub/folder\";"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	src/sub/folder/index.ts
	  Imported via "./sub/folder" from file 'src/index.ts'
	  Matched by default include pattern '**/*'
	src/index.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/packages/dep/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/packages/app/package.json",
        "configFile": "/packages/dep/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/packages/app/package.json SVC-1-0 "{ \"name\": \"app\", \"dependencies\": { \"dep\": \"*\" } }"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	package.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/app/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project '/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/packages/dep/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /packages/app/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/packages/app/package.json: *new*
  {"pollingInterval":250}
/packages/app/src/index.ts: *new*
  {"pollingInterval":500}
/packages/app/tsconfig.json: *new*
  {"pollingInterval":2000}
/packages/dep/src/index.ts: *new*
  {"pollingInterval":500}
/packages/dep/src/package.json: *new*
  {"pollingInterval":2000}
/packages/dep/src/sub/folder/index.ts: *new*
  {"pollingInterval":500}
/packages/dep/src/sub/folder/package.json: *new*
  {"pollingInterval":2000}
/packages/dep/src/sub/package.json: *new*
  {"pollingInterval":2000}
/packages/dep/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/packages/app: *new*
  {}
/packages/dep: *new*
  {}
/packages/dep/src: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/packages/dep/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/packages/app/package.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/packages/app/src/index.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json
/packages/dep/src/index.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/dep/tsconfig.json
/packages/dep/src/sub/folder/index.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/dep/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/packages/app/src/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /packages/app/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /packages/app/src/index.ts ProjectRootPath: undefined:: Result: /packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/packages/dep/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /packages/app/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /packages/app/src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /packages/app/tsconfig.json
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/packages/app/package.json:
  {"pollingInterval":250}
/packages/app/tsconfig.json:
  {"pollingInterval":2000}
/packages/dep/src/index.ts:
  {"pollingInterval":500}
/packages/dep/src/package.json:
  {"pollingInterval":2000}
/packages/dep/src/sub/folder/index.ts:
  {"pollingInterval":500}
/packages/dep/src/sub/folder/package.json:
  {"pollingInterval":2000}
/packages/dep/src/sub/package.json:
  {"pollingInterval":2000}
/packages/dep/tsconfig.json:
  {"pollingInterval":2000}

watchedFiles *deleted*::
/packages/app/src/index.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/packages/app:
  {}
/packages/dep:
  {}
/packages/dep/src:
  {}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*
/packages/dep/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/packages/app/src/index.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/dep/src/index.ts
    version: Text-1
    containingProjects: 1
        /packages/dep/tsconfig.json
/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /packages/dep/tsconfig.json

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
        "file": "/packages/app/src/index.ts",
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
        "file": "/packages/app/src/index.ts",
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
        "file": "/packages/app/src/index.ts",
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
        "file": "/packages/app/src/index.ts",
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
Info seq  [hh:mm:ss:mss] AutoImportProviderProject: found 1 root files in 1 dependencies 0 referenced projects in * ms
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/autoImportProviderProject1*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/dep/src 1 undefined Project: /dev/null/autoImportProviderProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/dep/src 1 undefined Project: /dev/null/autoImportProviderProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/sub/folder/package.json 2000 undefined Project: /dev/null/autoImportProviderProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/sub/package.json 2000 undefined Project: /dev/null/autoImportProviderProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/dep/src/package.json 2000 undefined Project: /dev/null/autoImportProviderProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/autoImportProviderProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/packages/dep/src/sub/folder/index.ts Text-1 "export const dep = 0;"
	/packages/dep/src/index.ts Text-1 "import \"./sub/folder\";"


	../dep/src/sub/folder/index.ts
	  Imported via "./sub/folder" from file '../dep/src/index.ts'
	../dep/src/index.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] forEachExternalModuleToImportFrom autoImportProvider: *
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/app/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/app/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 6,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *,
        "createAutoImportProviderProgramDurationMs": *
      },
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"dep/src/sub/folder\"",
          "changes": [
            {
              "fileName": "/packages/app/src/index.ts",
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
                  "newText": "import { dep } from \"dep/src/sub/folder\";\r\n\r\n"
                }
              ]
            }
          ]
        }
      ]
    }
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/packages/app/package.json:
  {"pollingInterval":250}
/packages/app/tsconfig.json:
  {"pollingInterval":2000}
/packages/dep/src/index.ts:
  {"pollingInterval":500}
/packages/dep/src/package.json:
  {"pollingInterval":2000}
  {"pollingInterval":2000} *new*
/packages/dep/src/sub/folder/index.ts:
  {"pollingInterval":500}
/packages/dep/src/sub/folder/package.json:
  {"pollingInterval":2000}
  {"pollingInterval":2000} *new*
/packages/dep/src/sub/package.json:
  {"pollingInterval":2000}
  {"pollingInterval":2000} *new*
/packages/dep/tsconfig.json:
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/packages/app:
  {}
/packages/app/node_modules: *new*
  {}
/packages/dep:
  {}
/packages/dep/src:
  {}
  {} *new*

Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: /dev/null/autoImportProviderProject1* *changed*
/packages/dep/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/packages/app/src/index.ts (Open)
    version: Text-1
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/dep/src/index.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /packages/dep/tsconfig.json
        /dev/null/autoImportProviderProject1* *new*
/packages/dep/src/sub/folder/index.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /packages/dep/tsconfig.json
        /dev/null/autoImportProviderProject1* *new*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/packages/app/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { dep } from \"dep/src/sub/folder\";\r\n\r\n"
      },
      "command": "change"
    }
After Request
Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider)
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    autoImportProviderHost: /dev/null/autoImportProviderProject1*
/packages/dep/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/packages/app/src/index.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/dep/src/index.ts
    version: Text-1
    containingProjects: 2
        /packages/dep/tsconfig.json
        /dev/null/autoImportProviderProject1*
/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 2
        /packages/dep/tsconfig.json
        /dev/null/autoImportProviderProject1*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/packages/app/src/index.ts",
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
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 3
        /packages/app/tsconfig.json
        /packages/dep/tsconfig.json
        /dev/null/inferredProject1*
/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/packages/app/src/index.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /packages/app/tsconfig.json *default*
/packages/dep/src/index.ts
    version: Text-1
    containingProjects: 2
        /packages/dep/tsconfig.json
        /dev/null/autoImportProviderProject1*
/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 2
        /packages/dep/tsconfig.json
        /dev/null/autoImportProviderProject1*
