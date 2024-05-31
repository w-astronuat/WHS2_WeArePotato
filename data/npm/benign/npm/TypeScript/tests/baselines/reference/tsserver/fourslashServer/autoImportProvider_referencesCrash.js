currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/a/index.d.ts]
declare class A {
}
//# sourceMappingURL=index.d.ts.map

//// [/a/index.d.ts.map]
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":"AAAA,OAAO,OAAO,CAAC;CAAG"}

//// [/a/index.ts]
class A {}

//// [/a/package.json]
{}

//// [/a/tsconfig.json]
{}

//// [/b/b.ts]
/// <reference path="../a/index.d.ts" />
new A();

//// [/b/tsconfig.json]
{
  "compilerOptions": { "disableSourceOfProjectReferenceRedirect": true },
  "references": [{ "path": "../a" }]
}

//// [/c/index.ts]
export {};

//// [/c/node_modules/a] symlink(/a)
//// [/c/package.json]
{ "dependencies": { "a": "*" } }

//// [/c/tsconfig.json]
{ "references" [{ "path": "../a" }] }

//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/a/package.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a/package.json ProjectRootPath: undefined:: Result: /a/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /a/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/tsconfig.json 2000 undefined Project: /a/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/a/tsconfig.json",
        "reason": "Creating possible configured project for /a/package.json to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /a/tsconfig.json : {
 "rootNames": [
  "/a/index.ts"
 ],
 "options": {
  "configFilePath": "/a/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /a 1 undefined Config: /a/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a 1 undefined Config: /a/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/a/index.ts Text-1 "class A {}"


	../lib.d.ts
	  Default library for target 'es5'
	../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../lib.d.ts'
	../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../lib.d.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/a/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/a/package.json",
        "configFile": "/a/tsconfig.json",
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
	/a/package.json SVC-1-0 "{}"


	../lib.d.ts
	  Default library for target 'es5'
	../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../lib.d.ts'
	../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../lib.d.ts'
	package.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project '/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After Request
watchedFiles::
/a/index.ts: *new*
  {"pollingInterval":500}
/a/package.json: *new*
  {"pollingInterval":250}
/a/tsconfig.json: *new*
  {"pollingInterval":2000}
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/a: *new*
  {}

Projects::
/a/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/index.ts *new*
    version: Text-1
    containingProjects: 1
        /a/tsconfig.json
/a/package.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts *new*
    version: Text-1
    containingProjects: 2
        /a/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 2
        /a/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 2
        /a/tsconfig.json
        /dev/null/inferredProject1*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/c/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /c/index.ts ProjectRootPath: undefined:: Result: /c/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /c/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /c/tsconfig.json 2000 undefined Project: /c/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/c/tsconfig.json",
        "reason": "Creating possible configured project for /c/index.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /c/tsconfig.json : {
 "rootNames": [
  "/c/index.ts"
 ],
 "options": {
  "configFilePath": "/c/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/a",
   "originalPath": "../a"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /c 1 undefined Config: /c/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /c 1 undefined Config: /c/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /c/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /c/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/c/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/c/index.ts SVC-1-0 "export {};"


	../lib.d.ts
	  Default library for target 'es5'
	../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../lib.d.ts'
	../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../lib.d.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /c/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] AutoImportProviderProject: found 1 root files in 1 dependencies 0 referenced projects in * ms
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/autoImportProviderProject1*
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/autoImportProviderProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a/index.ts Text-1 "class A {}"


	../a/index.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/c/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/c/index.ts",
        "configFile": "/c/tsconfig.json",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 17
            },
            "end": {
              "line": 1,
              "offset": 35
            },
            "text": "Referenced project '/a' must have setting \"composite\": true.",
            "code": 6306,
            "category": "error",
            "fileName": "/c/tsconfig.json"
          },
          {
            "start": {
              "line": 1,
              "offset": 16
            },
            "end": {
              "line": 1,
              "offset": 17
            },
            "text": "':' expected.",
            "code": 1005,
            "category": "error",
            "fileName": "/c/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/c/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /c/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /c/tsconfig.json
After Request
watchedFiles::
/a/index.ts:
  {"pollingInterval":500}
/a/package.json:
  {"pollingInterval":250}
/a/tsconfig.json:
  {"pollingInterval":2000}
/c/package.json: *new*
  {"pollingInterval":250}
/c/tsconfig.json: *new*
  {"pollingInterval":2000}
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/a:
  {}
/c: *new*
  {}

Projects::
/a/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*
/c/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: /dev/null/autoImportProviderProject1*
/dev/null/autoImportProviderProject1* (AutoImportProvider) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/index.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /a/tsconfig.json
        /dev/null/autoImportProviderProject1* *new*
/a/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/c/index.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /c/tsconfig.json *default*
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json *new*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/b/b.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /b/b.ts ProjectRootPath: undefined:: Result: /b/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /b/tsconfig.json 2000 undefined Project: /b/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/b/tsconfig.json",
        "reason": "Creating possible configured project for /b/b.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /b/tsconfig.json : {
 "rootNames": [
  "/b/b.ts"
 ],
 "options": {
  "disableSourceOfProjectReferenceRedirect": true,
  "configFilePath": "/b/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/a",
   "originalPath": "../a"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /b 1 undefined Config: /b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /b 1 undefined Config: /b/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/index.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /b/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/a/index.d.ts Text-1 "declare class A {\n}\n//# sourceMappingURL=index.d.ts.map"
	/b/b.ts SVC-1-0 "/// <reference path=\"../a/index.d.ts\" />\nnew A();"


	../lib.d.ts
	  Default library for target 'es5'
	../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../lib.d.ts'
	../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../lib.d.ts'
	../a/index.d.ts
	  Referenced via '../a/index.d.ts' from file 'b.ts'
	b.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/b/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/b/b.ts",
        "configFile": "/b/tsconfig.json",
        "diagnostics": [
          {
            "start": {
              "line": 3,
              "offset": 18
            },
            "end": {
              "line": 3,
              "offset": 36
            },
            "text": "Referenced project '/a' must have setting \"composite\": true.",
            "code": 6306,
            "category": "error",
            "fileName": "/b/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/a/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/c/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/b/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /c/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /c/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /b/b.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /b/tsconfig.json
After Request
watchedFiles::
/a/index.d.ts: *new*
  {"pollingInterval":500}
/a/index.ts:
  {"pollingInterval":500}
/a/package.json:
  {"pollingInterval":250}
/a/tsconfig.json:
  {"pollingInterval":2000}
/b/tsconfig.json: *new*
  {"pollingInterval":2000}
/c/package.json:
  {"pollingInterval":250}
/c/tsconfig.json:
  {"pollingInterval":2000}
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/a:
  {}
/b: *new*
  {}
/c:
  {}

Projects::
/a/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/b/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/c/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: /dev/null/autoImportProviderProject1*
/dev/null/autoImportProviderProject1* (AutoImportProvider)
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /b/tsconfig.json
/a/index.ts
    version: Text-1
    containingProjects: 2
        /a/tsconfig.json
        /dev/null/autoImportProviderProject1*
/a/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/b/b.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /b/tsconfig.json *default*
/c/index.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /c/tsconfig.json *default*
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 4 *changed*
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json
        /b/tsconfig.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 4 *changed*
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json
        /b/tsconfig.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 4 *changed*
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json
        /b/tsconfig.json *new*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/b/b.ts",
        "line": 2,
        "offset": 6
      },
      "command": "references-full"
    }
Info seq  [hh:mm:ss:mss] Finding references to /b/b.ts position 46 in project /b/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/index.d.ts.map 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a/index.ts ProjectRootPath: undefined:: Result: /a/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a/index.ts ProjectRootPath: undefined:: Result: /a/tsconfig.json
Info seq  [hh:mm:ss:mss] Finding references to /a/index.ts position 10 in project /a/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "references-full",
      "request_seq": 3,
      "success": true,
      "body": [
        {
          "definition": {
            "containerKind": "",
            "containerName": "",
            "fileName": "/a/index.ts",
            "kind": "class",
            "name": "class A",
            "textSpan": {
              "start": 10,
              "length": 1
            },
            "displayParts": [
              {
                "text": "class",
                "kind": "keyword"
              },
              {
                "text": " ",
                "kind": "space"
              },
              {
                "text": "A",
                "kind": "className"
              }
            ],
            "contextSpan": {
              "start": 0,
              "length": 10
            }
          },
          "references": [
            {
              "textSpan": {
                "start": 45,
                "length": 1
              },
              "fileName": "/b/b.ts",
              "isWriteAccess": false
            }
          ]
        }
      ]
    }
After Request
watchedFiles::
/a/index.d.ts:
  {"pollingInterval":500}
/a/index.d.ts.map: *new*
  {"pollingInterval":500}
/a/index.ts:
  {"pollingInterval":500}
/a/package.json:
  {"pollingInterval":250}
/a/tsconfig.json:
  {"pollingInterval":2000}
/b/tsconfig.json:
  {"pollingInterval":2000}
/c/package.json:
  {"pollingInterval":250}
/c/tsconfig.json:
  {"pollingInterval":2000}
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/a:
  {}
/b:
  {}
/c:
  {}

Projects::
/a/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/b/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    documentPositionMappers: 1 *changed*
        /a/index.d.ts: DocumentPositionMapper1 *new*
    originalConfiguredProjects: 1 *changed*
        /a/tsconfig.json *new*
/c/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: /dev/null/autoImportProviderProject1*
/dev/null/autoImportProviderProject1* (AutoImportProvider)
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/index.d.ts *changed*
    version: Text-1
    sourceMapFilePath: /a/index.d.ts.map *changed*
    containingProjects: 1
        /b/tsconfig.json
/a/index.d.ts.map *new*
    version: Text-1
    declarationInfoPath: /a/index.d.ts
    sourceInfos: 1
        /a/index.ts
    documentPositionMapper: DocumentPositionMapper1
    containingProjects: 0
/a/index.ts
    version: Text-1
    containingProjects: 2
        /a/tsconfig.json
        /dev/null/autoImportProviderProject1*
/a/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/b/b.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /b/tsconfig.json *default*
/c/index.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /c/tsconfig.json *default*
/lib.d.ts
    version: Text-1
    containingProjects: 4
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json
        /b/tsconfig.json
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 4
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json
        /b/tsconfig.json
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 4
        /a/tsconfig.json
        /dev/null/inferredProject1*
        /c/tsconfig.json
        /b/tsconfig.json

DocumentPositionMappers::
DocumentPositionMapper1 *new*
