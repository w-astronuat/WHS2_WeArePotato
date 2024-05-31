currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/apps/app1/src/app.ts]
utils

//// [/apps/app1/src/index.ts]
shared

//// [/apps/app1/src/utils.ts]
export const utils = 0;

//// [/apps/app1/tsconfig.json]
{
  "compilerOptions": {
    "module": "commonjs",
    "paths": {
      "shared/*": ["../../shared/*"]
    }
  },
  "include": ["src", "../../shared"]
}

//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/shared/constants.ts]
export const shared = 0;

//// [/shared/data.ts]
shared


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/tsconfig.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /apps/app1/tsconfig.json ProjectRootPath: undefined:: Result: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /apps/app1/tsconfig.json 2000 undefined Project: /apps/app1/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/apps/app1/tsconfig.json",
        "reason": "Creating possible configured project for /apps/app1/tsconfig.json to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /apps/app1/tsconfig.json : {
 "rootNames": [
  "/apps/app1/src/app.ts",
  "/apps/app1/src/index.ts",
  "/apps/app1/src/utils.ts",
  "/shared/constants.ts",
  "/shared/data.ts"
 ],
 "options": {
  "module": 1,
  "paths": {
   "shared/*": [
    "../../shared/*"
   ]
  },
  "pathsBasePath": "/apps/app1",
  "configFilePath": "/apps/app1/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /apps/app1/src 1 undefined Config: /apps/app1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /apps/app1/src 1 undefined Config: /apps/app1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /shared 1 undefined Config: /apps/app1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /shared 1 undefined Config: /apps/app1/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /apps/app1/src/app.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /apps/app1/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /apps/app1/src/utils.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /shared/constants.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /shared/data.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /apps/app1/src/package.json 2000 undefined Project: /apps/app1/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /apps/app1/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/apps/app1/src/app.ts Text-1 "utils"
	/apps/app1/src/index.ts Text-1 "shared"
	/apps/app1/src/utils.ts Text-1 "export const utils = 0;"
	/shared/constants.ts Text-1 "export const shared = 0;"
	/shared/data.ts Text-1 "shared"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	src/app.ts
	  Matched by include pattern 'src' in 'tsconfig.json'
	src/index.ts
	  Matched by include pattern 'src' in 'tsconfig.json'
	src/utils.ts
	  Matched by include pattern 'src' in 'tsconfig.json'
	../../shared/constants.ts
	  Matched by include pattern '../../shared' in 'tsconfig.json'
	../../shared/data.ts
	  Matched by include pattern '../../shared' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/apps/app1/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/apps/app1/tsconfig.json",
        "configFile": "/apps/app1/tsconfig.json",
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
	/apps/app1/tsconfig.json SVC-1-0 "{\n  \"compilerOptions\": {\n    \"module\": \"commonjs\",\n    \"paths\": {\n      \"shared/*\": [\"../../shared/*\"]\n    }\n  },\n  \"include\": [\"src\", \"../../shared\"]\n}"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	tsconfig.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After Request
watchedFiles::
/apps/app1/src/app.ts: *new*
  {"pollingInterval":500}
/apps/app1/src/index.ts: *new*
  {"pollingInterval":500}
/apps/app1/src/package.json: *new*
  {"pollingInterval":2000}
/apps/app1/src/utils.ts: *new*
  {"pollingInterval":500}
/apps/app1/tsconfig.json: *new*
  {"pollingInterval":2000}
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/shared/constants.ts: *new*
  {"pollingInterval":500}
/shared/data.ts: *new*
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/apps/app1/src: *new*
  {}
/shared: *new*
  {}

Projects::
/apps/app1/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts *new*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/src/index.ts *new*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/src/utils.ts *new*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts *new*
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts *new*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts *new*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "formatOptions": {
          "indentSize": 4,
          "tabSize": 4,
          "newLineCharacter": "\n",
          "convertTabsToSpaces": true,
          "indentStyle": 2,
          "insertSpaceAfterConstructor": false,
          "insertSpaceAfterCommaDelimiter": true,
          "insertSpaceAfterSemicolonInForStatements": true,
          "insertSpaceBeforeAndAfterBinaryOperators": true,
          "insertSpaceAfterKeywordsInControlFlowStatements": true,
          "insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
          "insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
          "insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
          "insertSpaceBeforeFunctionParenthesis": false,
          "placeOpenBraceOnNewLineForFunctions": false,
          "placeOpenBraceOnNewLineForControlBlocks": false,
          "semicolons": "ignore",
          "trimTrailingWhitespace": true,
          "indentSwitchCase": true,
          "newline": "\n"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] Format host information updated
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 1,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /apps/app1/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /apps/app1/src/index.ts ProjectRootPath: undefined:: Result: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /apps/app1/tsconfig.json
After Request
watchedFiles::
/apps/app1/src/app.ts:
  {"pollingInterval":500}
/apps/app1/src/package.json:
  {"pollingInterval":2000}
/apps/app1/src/utils.ts:
  {"pollingInterval":500}
/apps/app1/tsconfig.json:
  {"pollingInterval":2000}
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/shared/constants.ts:
  {"pollingInterval":500}
/shared/data.ts:
  {"pollingInterval":500}

watchedFiles *deleted*::
/apps/app1/src/index.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/apps/app1/src:
  {}
/shared:
  {}

Projects::
/apps/app1/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/src/index.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "preferences": {
          "importModuleSpecifierPreference": "project-relative"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 3,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "preferences": {
          "importModuleSpecifierPreference": "project-relative"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 4,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 5,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 6,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'shared'.",
          "start": 0,
          "length": 6,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 7
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 7,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 7,
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
      "request_seq": 8,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"shared/constants\"",
          "changes": [
            {
              "fileName": "/apps/app1/src/index.ts",
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
                  "newText": "import { shared } from \"shared/constants\";\n\n"
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 9,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { shared } from \"shared/constants\";\n\n"
      },
      "command": "change"
    }
After Request
Projects::
/apps/app1/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/src/index.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 10,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/index.ts",
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
/apps/app1/src/app.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/src/index.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 11,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /apps/app1/src/app.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /apps/app1/src/app.ts ProjectRootPath: undefined:: Result: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /apps/app1/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/apps/app1/src/app.ts Text-1 "utils"
	/apps/app1/src/index.ts SVC-2-2 "shared"
	/apps/app1/src/utils.ts Text-1 "export const utils = 0;"
	/shared/constants.ts Text-1 "export const shared = 0;"
	/shared/data.ts Text-1 "shared"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/src/app.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /apps/app1/tsconfig.json
After Request
watchedFiles::
/apps/app1/src/package.json:
  {"pollingInterval":2000}
/apps/app1/src/utils.ts:
  {"pollingInterval":500}
/apps/app1/tsconfig.json:
  {"pollingInterval":2000}
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/shared/constants.ts:
  {"pollingInterval":500}
/shared/data.ts:
  {"pollingInterval":500}

watchedFiles *deleted*::
/apps/app1/src/app.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/apps/app1/src:
  {}
/shared:
  {}

Projects::
/apps/app1/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: false *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 12,
      "type": "request",
      "arguments": {
        "preferences": {
          "importModuleSpecifierPreference": "project-relative"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 12,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 13,
      "type": "request",
      "arguments": {
        "preferences": {
          "importModuleSpecifierPreference": "project-relative"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 13,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 14,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 14,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 15,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 15,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'utils'.",
          "start": 0,
          "length": 5,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 6
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 16,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 16,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 17,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 6,
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
      "request_seq": 17,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"./utils\"",
          "changes": [
            {
              "fileName": "/apps/app1/src/app.ts",
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
                  "newText": "import { utils } from \"./utils\";\n\n"
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 18,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { utils } from \"./utils\";\n\n"
      },
      "command": "change"
    }
After Request
Projects::
/apps/app1/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 19,
      "type": "request",
      "arguments": {
        "file": "/apps/app1/src/app.ts",
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
/apps/app1/src/app.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 20,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /shared/data.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /shared/data.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /apps/app1/tsconfig.json projectStateVersion: 3 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/apps/app1/src/app.ts SVC-2-2 "utils"
	/apps/app1/src/index.ts SVC-2-2 "shared"
	/apps/app1/src/utils.ts Text-1 "export const utils = 0;"
	/shared/constants.ts Text-1 "export const shared = 0;"
	/shared/data.ts Text-1 "shared"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/apps/app1/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /apps/app1/src/app.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /apps/app1/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /shared/data.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /apps/app1/tsconfig.json
After Request
watchedFiles::
/apps/app1/src/package.json:
  {"pollingInterval":2000}
/apps/app1/src/utils.ts:
  {"pollingInterval":500}
/apps/app1/tsconfig.json:
  {"pollingInterval":2000}
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/shared/constants.ts:
  {"pollingInterval":500}

watchedFiles *deleted*::
/shared/data.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/apps/app1/src:
  {}
/shared:
  {}

Projects::
/apps/app1/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 1
    dirty: false *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 21,
      "type": "request",
      "arguments": {
        "preferences": {
          "importModuleSpecifierPreference": "project-relative"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 21,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 22,
      "type": "request",
      "arguments": {
        "preferences": {
          "importModuleSpecifierPreference": "project-relative"
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 22,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 23,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 23,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 24,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 24,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'shared'.",
          "start": 0,
          "length": 6,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 7
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 25,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 25,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 26,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 7,
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
      "request_seq": 26,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"./constants\"",
          "changes": [
            {
              "fileName": "/shared/data.ts",
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
                  "newText": "import { shared } from \"./constants\";\n\n"
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 27,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { shared } from \"./constants\";\n\n"
      },
      "command": "change"
    }
After Request
Projects::
/apps/app1/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/apps/app1/src/app.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /apps/app1/tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 28,
      "type": "request",
      "arguments": {
        "file": "/shared/data.ts",
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
/apps/app1/src/app.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
/apps/app1/src/utils.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/apps/app1/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /apps/app1/tsconfig.json
        /dev/null/inferredProject1*
/shared/constants.ts
    version: Text-1
    containingProjects: 1
        /apps/app1/tsconfig.json
/shared/data.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /apps/app1/tsconfig.json *default*
