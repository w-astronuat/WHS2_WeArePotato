currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
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

//// [/src/child/child.ts]
import { child2 } from "../child/child2";
export function child() {
    child2();
}


//// [/src/child/child2.ts]
export function child2() {
}


//// [/src/child/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outFile": "../childResult.js",
    "module": "amd"
  }
}

//// [/src/main/main.ts]
import { child } from "child";
export function main() {
    child();
}


//// [/src/main/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outFile": "../mainResult.js",
    "module": "amd"
  },
  "references": [
    {
      "path": "../child"
    }
  ]
}



Output::
/lib/tsc --b /src/main/tsconfig.json -v --traceResolution --explainFiles
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/child/tsconfig.json
    * src/main/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/child/tsconfig.json' is out of date because output file 'src/childResult.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/child/tsconfig.json'...

File '/src/child/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module '../child/child2' from '/src/child/child.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/child/child2.ts' exists - use it as a name resolution result.
======== Module name '../child/child2' was successfully resolved to '/src/child/child2.ts'. ========
File '/src/child/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/child/child2.ts
  Imported via "../child/child2" from file 'src/child/child.ts'
  Matched by default include pattern '**/*'
src/child/child.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Project 'src/main/tsconfig.json' is out of date because output file 'src/mainResult.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/main/tsconfig.json'...

File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/main/package.json' does not exist.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module 'child' from '/src/main/main.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/main/child.ts' does not exist.
File '/src/main/child.tsx' does not exist.
File '/src/main/child.d.ts' does not exist.
File '/src/child.ts' does not exist.
File '/src/child.tsx' does not exist.
File '/src/child.d.ts' does not exist.
File '/child.ts' does not exist.
File '/child.tsx' does not exist.
File '/child.d.ts' does not exist.
Searching all ancestor node_modules directories for preferred extensions: Declaration.
Directory '/src/main/node_modules' does not exist, skipping all lookups in it.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/main/child.js' does not exist.
File '/src/main/child.jsx' does not exist.
File '/src/child.js' does not exist.
File '/src/child.jsx' does not exist.
File '/child.js' does not exist.
File '/child.jsx' does not exist.
======== Module name 'child' was not resolved. ========
File '/lib/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/childResult.d.ts
  Output from referenced project 'src/child/tsconfig.json' included because '--outFile' specified
src/main/main.ts
  Matched by default include pattern '**/*'
exitCode:: ExitStatus.Success


//// [/src/childResult.d.ts]
declare module "child2" {
    export function child2(): void;
}
declare module "child" {
    export function child(): void;
}


//// [/src/childResult.js]
define("child2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.child2 = child2;
    function child2() {
    }
});
define("child", ["require", "exports", "child2"], function (require, exports, child2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.child = child;
    function child() {
        (0, child2_1.child2)();
    }
});


//// [/src/childResult.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./child/child2.ts","./child/child.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"6507293504-export function child2() {\n}\n","impliedFormat":1},{"version":"-11458139532-import { child2 } from \"../child/child2\";\nexport function child() {\n    child2();\n}\n","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"outFile":"./childResult.js"},"outSignature":"2074776633-declare module \"child2\" {\n    export function child2(): void;\n}\ndeclare module \"child\" {\n    export function child(): void;\n}\n","latestChangedDtsFile":"./childResult.d.ts"},"version":"FakeTSVersion"}

//// [/src/childResult.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./child/child2.ts",
      "./child/child.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./child/child2.ts": {
        "original": {
          "version": "6507293504-export function child2() {\n}\n",
          "impliedFormat": 1
        },
        "version": "6507293504-export function child2() {\n}\n",
        "impliedFormat": "commonjs"
      },
      "./child/child.ts": {
        "original": {
          "version": "-11458139532-import { child2 } from \"../child/child2\";\nexport function child() {\n    child2();\n}\n",
          "impliedFormat": 1
        },
        "version": "-11458139532-import { child2 } from \"../child/child2\";\nexport function child() {\n    child2();\n}\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./child/child2.ts"
      ],
      [
        3,
        "./child/child.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./childResult.js"
    },
    "outSignature": "2074776633-declare module \"child2\" {\n    export function child2(): void;\n}\ndeclare module \"child\" {\n    export function child(): void;\n}\n",
    "latestChangedDtsFile": "./childResult.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1097
}

//// [/src/mainResult.d.ts]
declare module "main" {
    export function main(): void;
}


//// [/src/mainResult.js]
define("main", ["require", "exports", "child"], function (require, exports, child_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.main = main;
    function main() {
        (0, child_1.child)();
    }
});


//// [/src/mainResult.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./childresult.d.ts","./main/main.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"2074776633-declare module \"child2\" {\n    export function child2(): void;\n}\ndeclare module \"child\" {\n    export function child(): void;\n}\n","impliedFormat":1},{"version":"-8784613407-import { child } from \"child\";\nexport function main() {\n    child();\n}\n","impliedFormat":1}],"root":[3],"options":{"composite":true,"module":2,"outFile":"./mainResult.js"},"outSignature":"7955277823-declare module \"main\" {\n    export function main(): void;\n}\n","latestChangedDtsFile":"./mainResult.d.ts"},"version":"FakeTSVersion"}

//// [/src/mainResult.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./childresult.d.ts",
      "./main/main.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./childresult.d.ts": {
        "original": {
          "version": "2074776633-declare module \"child2\" {\n    export function child2(): void;\n}\ndeclare module \"child\" {\n    export function child(): void;\n}\n",
          "impliedFormat": 1
        },
        "version": "2074776633-declare module \"child2\" {\n    export function child2(): void;\n}\ndeclare module \"child\" {\n    export function child(): void;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./main/main.ts": {
        "original": {
          "version": "-8784613407-import { child } from \"child\";\nexport function main() {\n    child();\n}\n",
          "impliedFormat": 1
        },
        "version": "-8784613407-import { child } from \"child\";\nexport function main() {\n    child();\n}\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        3,
        "./main/main.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./mainResult.js"
    },
    "outSignature": "7955277823-declare module \"main\" {\n    export function main(): void;\n}\n",
    "latestChangedDtsFile": "./mainResult.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1112
}



Change:: delete child2 file
Input::
//// [/src/child/child2.ts] unlink


Output::
/lib/tsc --b /src/main/tsconfig.json -v --traceResolution --explainFiles
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/child/tsconfig.json
    * src/main/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/child/tsconfig.json' is out of date because buildinfo file 'src/childResult.tsbuildinfo' indicates that file 'src/child/child2.ts' was root file of compilation but not any more.

[[90mHH:MM:SS AM[0m] Building project '/src/child/tsconfig.json'...

File '/src/child/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module '../child/child2' from '/src/child/child.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/src/child/child2.ts' does not exist.
File '/src/child/child2.tsx' does not exist.
File '/src/child/child2.d.ts' does not exist.
File '/src/child/child2.js' does not exist.
File '/src/child/child2.jsx' does not exist.
======== Module name '../child/child2' was not resolved. ========
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/child/child.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m TS2792: [0mCannot find module '../child/child2'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

[7m1[0m import { child2 } from "../child/child2";
[7m [0m [91m                       ~~~~~~~~~~~~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/child/child.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Project 'src/main/tsconfig.json' can't be built because its dependency 'src/child' has errors

[[90mHH:MM:SS AM[0m] Skipping build of project '/src/main/tsconfig.json' because its dependency '/src/child' has errors


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


