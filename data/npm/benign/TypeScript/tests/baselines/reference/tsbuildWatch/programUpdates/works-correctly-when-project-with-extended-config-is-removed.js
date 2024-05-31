currentDirectory:: /a/b useCaseSensitiveFileNames: false
Input::
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

//// [/a/b/tsconfig.json]
{
  "references": [
    {
      "path": "./project1.tsconfig.json"
    },
    {
      "path": "./project2.tsconfig.json"
    }
  ],
  "files": []
}

//// [/a/b/alpha.tsconfig.json]
{
  "compilerOptions": {
    "strict": true
  }
}

//// [/a/b/project1.tsconfig.json]
{
  "extends": "./alpha.tsconfig.json",
  "compilerOptions": {
    "composite": true
  },
  "files": [
    "/a/b/commonFile1.ts",
    "/a/b/commonFile2.ts"
  ]
}

//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

//// [/a/b/bravo.tsconfig.json]
{
  "compilerOptions": {
    "strict": true
  }
}

//// [/a/b/project2.tsconfig.json]
{
  "extends": "./bravo.tsconfig.json",
  "compilerOptions": {
    "composite": true
  },
  "files": [
    "/a/b/other.ts"
  ]
}

//// [/a/b/other.ts]
let z = 0;


/a/lib/tsc.js -b -w -v
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Projects in this build: 
    * project1.tsconfig.json
    * project2.tsconfig.json
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'project1.tsconfig.json' is out of date because output file 'project1.tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/a/b/project1.tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'project2.tsconfig.json' is out of date because output file 'project2.tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/a/b/project2.tsconfig.json'...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/a/b/commonFile1.js]
"use strict";
var x = 1;


//// [/a/b/commonFile1.d.ts]
declare let x: number;


//// [/a/b/commonFile2.js]
"use strict";
var y = 1;


//// [/a/b/commonFile2.d.ts]
declare let y: number;


//// [/a/b/project1.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./commonfile1.ts","./commonfile2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"2167136208-let x = 1","signature":"2842409786-declare let x: number;\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"2168322129-let y = 1","signature":"784887931-declare let y: number;\n","affectsGlobalScope":true,"impliedFormat":1}],"root":[2,3],"options":{"composite":true,"strict":true},"referencedMap":[],"semanticDiagnosticsPerFile":[2,3,1],"latestChangedDtsFile":"./commonFile2.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project1.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./commonfile1.ts",
      "./commonfile2.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./commonfile1.ts": {
        "original": {
          "version": "2167136208-let x = 1",
          "signature": "2842409786-declare let x: number;\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "2167136208-let x = 1",
        "signature": "2842409786-declare let x: number;\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./commonfile2.ts": {
        "original": {
          "version": "2168322129-let y = 1",
          "signature": "784887931-declare let y: number;\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "2168322129-let y = 1",
        "signature": "784887931-declare let y: number;\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./commonfile1.ts"
      ],
      [
        3,
        "./commonfile2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "strict": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "./commonfile1.ts",
      "./commonfile2.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./commonFile2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 953
}

//// [/a/b/other.js]
"use strict";
var z = 0;


//// [/a/b/other.d.ts]
declare let z: number;


//// [/a/b/project2.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"2874288940-let z = 0;","signature":"-1272633924-declare let z: number;\n","affectsGlobalScope":true,"impliedFormat":1}],"root":[2],"options":{"composite":true,"strict":true},"referencedMap":[],"semanticDiagnosticsPerFile":[2,1],"latestChangedDtsFile":"./other.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project2.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./other.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./other.ts": {
        "original": {
          "version": "2874288940-let z = 0;",
          "signature": "-1272633924-declare let z: number;\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "2874288940-let z = 0;",
        "signature": "-1272633924-declare let z: number;\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./other.ts"
      ]
    ],
    "options": {
      "composite": true,
      "strict": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "./other.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./other.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 792
}


PolledWatches::
/a/b/package.json: *new*
  {"pollingInterval":2000}
/a/lib/package.json: *new*
  {"pollingInterval":2000}
/a/package.json: *new*
  {"pollingInterval":2000}
/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/b/alpha.tsconfig.json: *new*
  {}
/a/b/bravo.tsconfig.json: *new*
  {}
/a/b/commonFile1.ts: *new*
  {}
/a/b/commonFile2.ts: *new*
  {}
/a/b/other.ts: *new*
  {}
/a/b/project1.tsconfig.json: *new*
  {}
/a/b/project2.tsconfig.json: *new*
  {}
/a/b/tsconfig.json: *new*
  {}

Program root files: [
  "/a/b/commonFile1.ts",
  "/a/b/commonFile2.ts"
]
Program options: {
  "strict": true,
  "composite": true,
  "watch": true,
  "configFilePath": "/a/b/project1.tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/commonfile1.ts (computed .d.ts during emit)
/a/b/commonfile2.ts (computed .d.ts during emit)

Program root files: [
  "/a/b/other.ts"
]
Program options: {
  "strict": true,
  "composite": true,
  "watch": true,
  "configFilePath": "/a/b/project2.tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/other.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/other.ts (computed .d.ts during emit)

exitCode:: ExitStatus.undefined

Change:: Remove project2 from base config

Input::
//// [/a/b/tsconfig.json]
{
  "references": [
    {
      "path": "./project1.tsconfig.json"
    }
  ],
  "files": []
}


Timeout callback:: count: 1
1: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
1: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.




PolledWatches::
/a/b/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonFile1.ts:
  {}
/a/b/commonFile2.ts:
  {}
/a/b/project1.tsconfig.json:
  {}
/a/b/tsconfig.json:
  {}

FsWatches *deleted*::
/a/b/bravo.tsconfig.json:
  {}
/a/b/other.ts:
  {}
/a/b/project2.tsconfig.json:
  {}


exitCode:: ExitStatus.undefined
