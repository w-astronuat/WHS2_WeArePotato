currentDirectory:: /user/username/projects/noEmitOnError useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dev-build",
    "noEmitOnError": true
  }
}

//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}


//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;


//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }


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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/a/lib/tsc.js -b -w -verbose --incremental
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Projects in this build: 
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because output file 'dev-build/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../shared/types/db.ts","../src/main.ts","../src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","signature":false,"affectsGlobalScope":true,"impliedFormat":1},{"version":"-5014788164-export interface A {\n    name: string;\n}\n","signature":false,"impliedFormat":1},{"version":"-2574607723-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n;\n","signature":false,"impliedFormat":1},{"version":"9084524823-console.log(\"hi\");\nexport { }\n","signature":false,"impliedFormat":1}],"root":[[2,4]],"options":{"noEmitOnError":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"changeFileSet":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "fileNamesList": [
      [
        "../shared/types/db.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "signature": false,
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../shared/types/db.ts": {
        "original": {
          "version": "-5014788164-export interface A {\n    name: string;\n}\n",
          "signature": false,
          "impliedFormat": 1
        },
        "version": "-5014788164-export interface A {\n    name: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "../src/main.ts": {
        "original": {
          "version": "-2574607723-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n;\n",
          "signature": false,
          "impliedFormat": 1
        },
        "version": "-2574607723-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n;\n",
        "impliedFormat": "commonjs"
      },
      "../src/other.ts": {
        "original": {
          "version": "9084524823-console.log(\"hi\");\nexport { }\n",
          "signature": false,
          "impliedFormat": 1
        },
        "version": "9084524823-console.log(\"hi\");\nexport { }\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../shared/types/db.ts",
          "../src/main.ts",
          "../src/other.ts"
        ]
      ]
    ],
    "options": {
      "noEmitOnError": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "changeFileSet": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1152
}


PolledWatches::
/a/lib/package.json: *new*
  {"pollingInterval":2000}
/a/package.json: *new*
  {"pollingInterval":2000}
/package.json: *new*
  {"pollingInterval":2000}
/user/package.json: *new*
  {"pollingInterval":2000}
/user/username/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/noEmitOnError/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/noEmitOnError/shared/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/noEmitOnError/shared/types/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/noEmitOnError/src/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/noEmitOnError/shared/types/db.ts: *new*
  {}
/user/username/projects/noEmitOnError/src/main.ts: *new*
  {}
/user/username/projects/noEmitOnError/src/other.ts: *new*
  {}
/user/username/projects/noEmitOnError/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/noEmitOnError: *new*
  {}

Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "noEmitOnError": true,
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
1: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
1: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because buildinfo file 'dev-build/tsconfig.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.





Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "noEmitOnError": true,
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Fix Syntax error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};


Timeout callback:: count: 1
2: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
2: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because buildinfo file 'dev-build/tsconfig.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../shared/types/db.ts","../src/main.ts","../src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5014788164-export interface A {\n    name: string;\n}\n","impliedFormat":1},{"version":"-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"9084524823-console.log(\"hi\");\nexport { }\n","signature":"-3531856636-export {};\n","impliedFormat":1}],"root":[[2,4]],"options":{"noEmitOnError":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "fileNamesList": [
      [
        "../shared/types/db.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../shared/types/db.ts": {
        "original": {
          "version": "-5014788164-export interface A {\n    name: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-5014788164-export interface A {\n    name: string;\n}\n",
        "signature": "-5014788164-export interface A {\n    name: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "../src/main.ts": {
        "original": {
          "version": "-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      },
      "../src/other.ts": {
        "original": {
          "version": "9084524823-console.log(\"hi\");\nexport { }\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "9084524823-console.log(\"hi\");\nexport { }\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../shared/types/db.ts",
          "../src/main.ts",
          "../src/other.ts"
        ]
      ]
    ],
    "options": {
      "noEmitOnError": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1170
}

//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = {
    lastName: 'sdsd'
};


//// [/user/username/projects/noEmitOnError/dev-build/src/other.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hi");




Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "noEmitOnError": true,
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/noemitonerror/shared/types/db.ts (computed .d.ts)
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)
/user/username/projects/noemitonerror/src/other.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = 10;


Timeout callback:: count: 1
3: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
3: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because output 'dev-build/tsconfig.tsbuildinfo' is older than input 'src/main.ts'

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../shared/types/db.ts","../src/main.ts","../src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5014788164-export interface A {\n    name: string;\n}\n","impliedFormat":1},{"version":"-11111345725-import { A } from \"../shared/types/db\";\nconst a: string = 10;","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"9084524823-console.log(\"hi\");\nexport { }\n","signature":"-3531856636-export {};\n","impliedFormat":1}],"root":[[2,4]],"options":{"noEmitOnError":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,[3,[{"file":"../src/main.ts","start":46,"length":1,"code":2322,"category":1,"messageText":"Type 'number' is not assignable to type 'string'."}]],4],"affectedFilesPendingEmit":[3]},"version":"FakeTSVersion"}

//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "fileNamesList": [
      [
        "../shared/types/db.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../shared/types/db.ts": {
        "original": {
          "version": "-5014788164-export interface A {\n    name: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-5014788164-export interface A {\n    name: string;\n}\n",
        "signature": "-5014788164-export interface A {\n    name: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "../src/main.ts": {
        "original": {
          "version": "-11111345725-import { A } from \"../shared/types/db\";\nconst a: string = 10;",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "-11111345725-import { A } from \"../shared/types/db\";\nconst a: string = 10;",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      },
      "../src/other.ts": {
        "original": {
          "version": "9084524823-console.log(\"hi\");\nexport { }\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "9084524823-console.log(\"hi\");\nexport { }\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../shared/types/db.ts",
          "../src/main.ts",
          "../src/other.ts"
        ]
      ]
    ],
    "options": {
      "noEmitOnError": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      [
        "../src/main.ts",
        [
          {
            "file": "../src/main.ts",
            "start": 46,
            "length": 1,
            "code": 2322,
            "category": 1,
            "messageText": "Type 'number' is not assignable to type 'string'."
          }
        ]
      ],
      "../src/other.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../src/main.ts",
        "Js"
      ]
    ]
  },
  "version": "FakeTSVersion",
  "size": 1329
}



Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "noEmitOnError": true,
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
4: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
4: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because buildinfo file 'dev-build/tsconfig.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.





Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "noEmitOnError": true,
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Fix Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = "hello";


Timeout callback:: count: 1
5: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
5: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because buildinfo file 'dev-build/tsconfig.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../shared/types/db.ts","../src/main.ts","../src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5014788164-export interface A {\n    name: string;\n}\n","impliedFormat":1},{"version":"-8373351622-import { A } from \"../shared/types/db\";\nconst a: string = \"hello\";","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"9084524823-console.log(\"hi\");\nexport { }\n","signature":"-3531856636-export {};\n","impliedFormat":1}],"root":[[2,4]],"options":{"noEmitOnError":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "fileNamesList": [
      [
        "../shared/types/db.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../shared/types/db.ts": {
        "original": {
          "version": "-5014788164-export interface A {\n    name: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-5014788164-export interface A {\n    name: string;\n}\n",
        "signature": "-5014788164-export interface A {\n    name: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "../src/main.ts": {
        "original": {
          "version": "-8373351622-import { A } from \"../shared/types/db\";\nconst a: string = \"hello\";",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "-8373351622-import { A } from \"../shared/types/db\";\nconst a: string = \"hello\";",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      },
      "../src/other.ts": {
        "original": {
          "version": "9084524823-console.log(\"hi\");\nexport { }\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "9084524823-console.log(\"hi\");\nexport { }\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../shared/types/db.ts",
          "../src/main.ts",
          "../src/other.ts"
        ]
      ]
    ],
    "options": {
      "noEmitOnError": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1161
}

//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "hello";




Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outDir": "/user/username/projects/noEmitOnError/dev-build",
  "noEmitOnError": true,
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Timeout callback:: count: 1
6: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
6: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is up to date but needs to update timestamps of output files that are older than input files

[[90mHH:MM:SS AM[0m] Updating output timestamps of project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/noEmitOnError/dev-build/tsconfig.tsbuildinfo] file changed its modified time


exitCode:: ExitStatus.undefined
