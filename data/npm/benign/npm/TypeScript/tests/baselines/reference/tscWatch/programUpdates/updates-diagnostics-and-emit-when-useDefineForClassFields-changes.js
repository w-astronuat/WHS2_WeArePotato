currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a.ts]
class C { get prop() { return 1; } }
class D extends C { prop = 1; }

//// [/tsconfig.json]
{
  "compilerOptions": {
    "target": "es6"
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


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96ma.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2610: [0m'prop' is defined as an accessor in class 'C', but is overridden here in 'D' as an instance property.

[7m2[0m class D extends C { prop = 1; }
[7m [0m [91m                    ~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/a.js]
class C {
    get prop() { return 1; }
}
class D extends C {
    constructor() {
        super(...arguments);
        this.prop = 1;
    }
}



FsWatches::
/a.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}
/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/: *new*
  {}

Program root files: [
  "/a.ts",
  "/a/lib/lib.d.ts"
]
Program options: {
  "target": 2,
  "watch": true,
  "configFilePath": "/tsconfig.json"
}
Program structureReused: Not
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/a/lib/lib.d.ts

Shape signatures in builder refreshed for::
/a.ts (used version)
/a/lib/lib.d.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Enable useDefineForClassFields

Input::
//// [/tsconfig.json]
{
  "compilerOptions": {
    "target": "es6",
    "useDefineForClassFields": true
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

[96ma.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2610: [0m'prop' is defined as an accessor in class 'C', but is overridden here in 'D' as an instance property.

[7m2[0m class D extends C { prop = 1; }
[7m [0m [91m                    ~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/a.js]
class C {
    get prop() { return 1; }
}
class D extends C {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "prop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
    }
}




Program root files: [
  "/a.ts",
  "/a/lib/lib.d.ts"
]
Program options: {
  "target": 2,
  "useDefineForClassFields": true,
  "watch": true,
  "configFilePath": "/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/a/lib/lib.d.ts

No shapes updated in the builder::

exitCode:: ExitStatus.undefined
