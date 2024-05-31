currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/compiler/lib.es5.d.ts]
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
declare const eval: any

//// [/compiler/lib.es2015.promise.d.ts]
declare class Promise<T> {}

//// [/src/app.ts]
var x: Promise<string>;

//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "noImplicitAny": true,
    "sourceMap": false,
    "lib": [
      "es5"
    ]
  }
}


/compiler/tsc.js -w -p /src/tsconfig.json
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96msrc/app.ts[0m:[93m1[0m:[93m8[0m - [91merror[0m[90m TS2583: [0mCannot find name 'Promise'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

[7m1[0m var x: Promise<string>;
[7m [0m [91m       ~~~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/src/app.js]
var x;



FsWatches::
/compiler/lib.es5.d.ts: *new*
  {}
/src/app.ts: *new*
  {}
/src/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/src: *new*
  {}

Program root files: [
  "/src/app.ts"
]
Program options: {
  "module": 1,
  "target": 1,
  "noImplicitAny": true,
  "sourceMap": false,
  "lib": [
    "lib.es5.d.ts"
  ],
  "watch": true,
  "project": "/src/tsconfig.json",
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/compiler/lib.es5.d.ts
/src/app.ts

Semantic diagnostics in builder refreshed for::
/compiler/lib.es5.d.ts
/src/app.ts

Shape signatures in builder refreshed for::
/compiler/lib.es5.d.ts (used version)
/src/app.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Change the lib in config

Input::
//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "noImplicitAny": true,
    "sourceMap": false,
    "lib": [
      "es5",
      "es2015.promise"
    ]
  }
}


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/src/app.js] file written with same contents

FsWatches::
/compiler/lib.es2015.promise.d.ts: *new*
  {}
/compiler/lib.es5.d.ts:
  {}
/src/app.ts:
  {}
/src/tsconfig.json:
  {}

FsWatchesRecursive::
/src:
  {}


Program root files: [
  "/src/app.ts"
]
Program options: {
  "module": 1,
  "target": 1,
  "noImplicitAny": true,
  "sourceMap": false,
  "lib": [
    "lib.es5.d.ts",
    "lib.es2015.promise.d.ts"
  ],
  "watch": true,
  "project": "/src/tsconfig.json",
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/compiler/lib.es5.d.ts
/compiler/lib.es2015.promise.d.ts
/src/app.ts

Semantic diagnostics in builder refreshed for::
/compiler/lib.es5.d.ts
/compiler/lib.es2015.promise.d.ts
/src/app.ts

Shape signatures in builder refreshed for::
/compiler/lib.es2015.promise.d.ts (used version)
/src/app.ts (computed .d.ts)

exitCode:: ExitStatus.undefined
