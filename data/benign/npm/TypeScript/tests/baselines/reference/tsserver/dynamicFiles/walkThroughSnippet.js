currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
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
        "file": "walkThroughSnippet:/usr/share/code/resources/app/out/vs/workbench/contrib/welcome/walkThrough/browser/editor/^vs_code_editor_walkthrough.md#1.ts",
        "fileContent": "/// <reference path=\"../../../../../../typings/@epic/Core.d.ts\" />\n/// <reference path=\"../../../../../../typings/@epic/Shell.d.ts\" />\nvar x = 10;"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: walkThroughSnippet:/usr/share/code/resources/app/out/vs/workbench/contrib/welcome/walkThrough/browser/editor/^vs_code_editor_walkthrough.md#1.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /walkThroughSnippet:/usr/share/code/resources/app/out/vs/typings/@epic/Core.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /walkThroughSnippet:/usr/share/code/resources/app/out/vs/typings/@epic/Shell.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	walkThroughSnippet:/usr/share/code/resources/app/out/vs/workbench/contrib/welcome/walkThrough/browser/editor/^vs_code_editor_walkthrough.md#1.ts SVC-1-0 "/// <reference path=\"../../../../../../typings/@epic/Core.d.ts\" />\n/// <reference path=\"../../../../../../typings/@epic/Shell.d.ts\" />\nvar x = 10;"


	a/lib/lib.d.ts
	  Default library for target 'es5'
	walkThroughSnippet:/usr/share/code/resources/app/out/vs/workbench/contrib/welcome/walkThrough/browser/editor/^vs_code_editor_walkthrough.md#1.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: walkThroughSnippet:/usr/share/code/resources/app/out/vs/workbench/contrib/welcome/walkThrough/browser/editor/^vs_code_editor_walkthrough.md#1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/walkThroughSnippet:/usr/share/code/resources/app/out/vs/typings/@epic/Core.d.ts: *new*
  {"pollingInterval":500}
/walkThroughSnippet:/usr/share/code/resources/app/out/vs/typings/@epic/Shell.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
walkThroughSnippet:/usr/share/code/resources/app/out/vs/workbench/contrib/welcome/walkThrough/browser/editor/^vs_code_editor_walkthrough.md#1.ts (Dynamic) (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
