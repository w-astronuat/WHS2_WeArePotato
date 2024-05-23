currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/a.ts]
let x = 1

//// [/a/b.ts]
let y = 1

//// [/a/tsconfig.json]
{
  "compilerOptions": {
    "out": "/a/out.js"
  }
}

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


/a/lib/tsc.js --w -p /a/tsconfig.json
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96ma/tsconfig.json[0m:[93m3[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'out' has been removed. Please remove it from your configuration.
  Use 'outFile' instead.

[7m3[0m     "out": "/a/out.js"
[7m [0m [91m    ~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/a/a.js]
var x = 1;


//// [/a/b.js]
var y = 1;



FsWatches::
/a/a.ts: *new*
  {}
/a/b.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}
/a/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/a: *new*
  {}

Program root files: [
  "/a/a.ts",
  "/a/b.ts",
  "/a/lib/lib.d.ts"
]
Program options: {
  "out": "/a/out.js",
  "watch": true,
  "project": "/a/tsconfig.json",
  "configFilePath": "/a/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/a.ts
/a/b.ts
/a/lib/lib.d.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/a/a.ts (used version)
/a/b.ts (used version)
/a/lib/lib.d.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Make change in the file

Input::
//// [/a/a.ts]
let x = 11


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96ma/tsconfig.json[0m:[93m3[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'out' has been removed. Please remove it from your configuration.
  Use 'outFile' instead.

[7m3[0m     "out": "/a/out.js"
[7m [0m [91m    ~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/a/a.js]
var x = 11;


//// [/a/b.js] file written with same contents


Program root files: [
  "/a/a.ts",
  "/a/b.ts",
  "/a/lib/lib.d.ts"
]
Program options: {
  "out": "/a/out.js",
  "watch": true,
  "project": "/a/tsconfig.json",
  "configFilePath": "/a/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/a.ts
/a/b.ts
/a/lib/lib.d.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/a/a.ts (computed .d.ts)
/a/b.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Make change in the file again

Input::
//// [/a/a.ts]
let xy = 11


Timeout callback:: count: 1
2: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
2: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96ma/tsconfig.json[0m:[93m3[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'out' has been removed. Please remove it from your configuration.
  Use 'outFile' instead.

[7m3[0m     "out": "/a/out.js"
[7m [0m [91m    ~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/a/a.js]
var xy = 11;


//// [/a/b.js] file written with same contents


Program root files: [
  "/a/a.ts",
  "/a/b.ts",
  "/a/lib/lib.d.ts"
]
Program options: {
  "out": "/a/out.js",
  "watch": true,
  "project": "/a/tsconfig.json",
  "configFilePath": "/a/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/a.ts
/a/b.ts
/a/lib/lib.d.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/a/a.ts (computed .d.ts)
/a/b.ts (computed .d.ts)

exitCode:: ExitStatus.undefined
