currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/a/b/app.ts]
let xyz = 1;


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/app.ts"
      },
      "seq": 1,
      "type": "request"
    }
TestServerCancellationToken:: Cancellation Request id:: 1
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a/b/app.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a/b/app.ts SVC-1-0 "let xyz = 1;"


	app.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a/b/app.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
TestServerCancellationToken:: resetRequest:: 1 is as expected
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/b/app.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "files": [
          "/a/b/app.ts"
        ],
        "delay": 0
      },
      "seq": 2,
      "type": "request"
    }
TestServerCancellationToken:: Cancellation Request id:: 2
TestServerCancellationToken:: resetRequest:: 2 is as expected
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 1
1: checkOne *new*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "documentHighlights",
      "arguments": {
        "file": "/a/b/app.ts",
        "line": 1,
        "offset": 6,
        "filesToSearch": [
          "/a/b/app.ts"
        ]
      },
      "seq": 3,
      "type": "request"
    }
TestServerCancellationToken:: Cancellation Request id:: 3
TestServerCancellationToken:: resetRequest:: 3 is as expected
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "file": "/a/b/app.ts",
          "highlightSpans": [
            {
              "start": {
                "line": 1,
                "offset": 5
              },
              "end": {
                "line": 1,
                "offset": 8
              },
              "contextStart": {
                "line": 1,
                "offset": 1
              },
              "contextEnd": {
                "line": 1,
                "offset": 13
              },
              "kind": "writtenReference"
            }
          ]
        }
      ],
      "responseRequired": true
    }
After request

Before running Timeout callback:: count: 1
1: checkOne

TestServerCancellationToken:: Cancellation Request id:: 2
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/a/b/app.ts",
        "diagnostics": []
      }
    }
TestServerCancellationToken:: resetRequest:: 2 is as expected
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
1: semanticCheck *new*

Before running Immedidate callback:: count: 1
1: semanticCheck

TestServerCancellationToken:: Cancellation Request id:: 2
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/a/b/app.ts",
        "diagnostics": []
      }
    }
TestServerCancellationToken:: resetRequest:: 2 is as expected
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
2: suggestionCheck *new*

Before running Immedidate callback:: count: 1
2: suggestionCheck

TestServerCancellationToken:: Cancellation Request id:: 2
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/a/b/app.ts",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 2
      }
    }
TestServerCancellationToken:: resetRequest:: 2 is as expected
After running Immedidate callback:: count: 0
