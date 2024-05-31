currentDirectory:: /home/src/projects useCaseSensitiveFileNames: false
Input::
//// [/home/src/lib/lib.d.ts]
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

//// [/home/src/lib/lib.scripthost.d.ts]
interface ScriptHostInterface { }

//// [/home/src/lib/lib.webworker.d.ts]
interface WebWorkerInterface { }

//// [/home/src/projects/project1/core.d.ts]
export const core = 10;

//// [/home/src/projects/project1/file.ts]
export const file = 10;

//// [/home/src/projects/project1/file2.ts]
/// <reference lib="webworker2"/>
/// <reference lib="unknownlib"/>
/// <reference lib="scripthost"/>


//// [/home/src/projects/project1/index.ts]
export const x = "type1";

//// [/home/src/projects/project1/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true
  }
}

//// [/home/src/projects/project1/utils.d.ts]
export const y = 10;



Output::
/home/src/lib/tsc -p project1 --explainFiles
File '/home/src/projects/project1/package.json' does not exist.
File '/home/src/projects/package.json' does not exist.
File '/home/src/package.json' does not exist.
File '/home/package.json' does not exist.
File '/package.json' does not exist.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name '@typescript/lib-scripthost' was not resolved. ========
File '/home/src/lib/package.json' does not exist.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96mproject1/file2.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2727: [0mCannot find lib definition for 'webworker2'. Did you mean 'webworker'?

[7m1[0m /// <reference lib="webworker2"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

[96mproject1/file2.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2726: [0mCannot find lib definition for 'unknownlib'.

[7m2[0m /// <reference lib="unknownlib"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

../lib/lib.d.ts
  Default library for target 'es5'
../lib/lib.scripthost.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
project1/core.d.ts
  Matched by default include pattern '**/*'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'

Found 2 errors in the same file, starting at: project1/file2.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/home/src/projects/project1/core.d.ts",
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "project": "/home/src/projects/project1",
  "explainFiles": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/lib/lib.d.ts (used version)
/home/src/lib/lib.scripthost.d.ts (used version)
/home/src/projects/project1/core.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts during emit)
/home/src/projects/project1/file2.ts (computed .d.ts during emit)
/home/src/projects/project1/index.ts (computed .d.ts during emit)
/home/src/projects/project1/utils.d.ts (used version)


//// [/home/src/projects/project1/file.d.ts]
export declare const file = 10;


//// [/home/src/projects/project1/file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = void 0;
exports.file = 10;


//// [/home/src/projects/project1/file2.d.ts]


//// [/home/src/projects/project1/file2.js]
/// <reference lib="webworker2"/>
/// <reference lib="unknownlib"/>
/// <reference lib="scripthost"/>


//// [/home/src/projects/project1/index.d.ts]
export declare const x = "type1";


//// [/home/src/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = "type1";


//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../../lib/lib.scripthost.d.ts","./core.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-15683237936-export const core = 10;","impliedFormat":1},{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n","impliedFormat":1},{"version":"-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n","signature":"5381-","impliedFormat":1},{"version":"-11532698187-export const x = \"type1\";","signature":"-5899226897-export declare const x = \"type1\";\n","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[[3,7]],"options":{"composite":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5,6,7],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
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
      "../../lib/lib.scripthost.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./core.d.ts": {
        "original": {
          "version": "-15683237936-export const core = 10;",
          "impliedFormat": 1
        },
        "version": "-15683237936-export const core = 10;",
        "signature": "-15683237936-export const core = 10;",
        "impliedFormat": "commonjs"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n",
          "impliedFormat": 1
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./file2.ts": {
        "original": {
          "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
          "signature": "5381-",
          "impliedFormat": 1
        },
        "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
        "signature": "5381-",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-11532698187-export const x = \"type1\";",
          "signature": "-5899226897-export declare const x = \"type1\";\n",
          "impliedFormat": 1
        },
        "version": "-11532698187-export const x = \"type1\";",
        "signature": "-5899226897-export declare const x = \"type1\";\n",
        "impliedFormat": "commonjs"
      },
      "./utils.d.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          3,
          7
        ],
        [
          "./core.d.ts",
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1512
}

