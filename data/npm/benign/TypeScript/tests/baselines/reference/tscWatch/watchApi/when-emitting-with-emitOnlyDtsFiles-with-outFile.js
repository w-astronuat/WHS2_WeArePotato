currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "noEmitOnError": true,
    "module": "amd",
    "outFile": "outFile.js"
  },
  "files": [
    "a.ts",
    "b.ts"
  ]
}

//// [/user/username/projects/myproject/a.ts]
export const x = 10;

//// [/user/username/projects/myproject/b.ts]
export const y: 10 = 20;

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


/a/lib/tsc.js --w --extendedDiagnostics
Output::
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

Current directory: /user/username/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
  options: {"composite":true,"noEmitOnError":true,"module":2,"outFile":"/user/username/projects/myproject/outFile.js","extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Type roots
[96mb.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS2322: [0mType '20' is not assignable to type '10'.

[7m1[0m export const y: 10 = 20;
[7m [0m [91m             ~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.




PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/a.ts: *new*
  {}
/user/username/projects/myproject/b.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

Program root files: [
  "/user/username/projects/myproject/a.ts",
  "/user/username/projects/myproject/b.ts"
]
Program options: {
  "composite": true,
  "noEmitOnError": true,
  "module": 2,
  "outFile": "/user/username/projects/myproject/outFile.js",
  "extendedDiagnostics": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Fix error but run emit with emitOnlyDts

Input::
//// [/user/username/projects/myproject/b.ts]
export const y = 10;


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 250 undefined Source file


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
  options: {"composite":true,"noEmitOnError":true,"module":2,"outFile":"/user/username/projects/myproject/outFile.js","extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}


//// [/user/username/projects/myproject/outFile.d.ts]
declare module "a" {
    export const x = 10;
}
declare module "b" {
    export const y = 10;
}


//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"noEmitOnError":true,"outFile":"./outFile.js"},"outSignature":"-4206946595-declare module \"a\" {\n    export const x = 10;\n}\ndeclare module \"b\" {\n    export const y = 10;\n}\n","latestChangedDtsFile":"./outFile.d.ts","pendingEmit":1},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./b.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./a.ts"
      ],
      [
        3,
        "./b.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "noEmitOnError": true,
      "outFile": "./outFile.js"
    },
    "outSignature": "-4206946595-declare module \"a\" {\n    export const x = 10;\n}\ndeclare module \"b\" {\n    export const y = 10;\n}\n",
    "latestChangedDtsFile": "./outFile.d.ts",
    "pendingEmit": [
      "Js",
      1
    ]
  },
  "version": "FakeTSVersion",
  "size": 928
}



Program root files: [
  "/user/username/projects/myproject/a.ts",
  "/user/username/projects/myproject/b.ts"
]
Program options: {
  "composite": true,
  "noEmitOnError": true,
  "module": 2,
  "outFile": "/user/username/projects/myproject/outFile.js",
  "extendedDiagnostics": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Emit with emitOnlyDts shouldnt emit anything

Input::


Program: Same as old program

BuilderProgram: Same as old builder program

exitCode:: ExitStatus.undefined

Change:: Emit all files

Input::
//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"noEmitOnError":true,"outFile":"./outFile.js"},"outSignature":"-4206946595-declare module \"a\" {\n    export const x = 10;\n}\ndeclare module \"b\" {\n    export const y = 10;\n}\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./b.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./a.ts"
      ],
      [
        3,
        "./b.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "noEmitOnError": true,
      "outFile": "./outFile.js"
    },
    "outSignature": "-4206946595-declare module \"a\" {\n    export const x = 10;\n}\ndeclare module \"b\" {\n    export const y = 10;\n}\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 912
}

//// [/user/username/projects/myproject/outFile.js]
define("a", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("b", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 10;
});




Program: Same as old program

BuilderProgram: Same as old builder program

exitCode:: ExitStatus.undefined

Change:: Emit with emitOnlyDts shouldnt emit anything

Input::


Program: Same as old program

BuilderProgram: Same as old builder program

exitCode:: ExitStatus.undefined

Change:: Emit full should not emit anything

Input::


Program: Same as old program

BuilderProgram: Same as old builder program

exitCode:: ExitStatus.undefined
