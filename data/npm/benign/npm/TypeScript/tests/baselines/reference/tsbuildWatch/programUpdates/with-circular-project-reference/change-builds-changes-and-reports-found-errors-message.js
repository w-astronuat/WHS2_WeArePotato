currentDirectory:: /user/username/projects useCaseSensitiveFileNames: false
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

//// [/user/username/projects/sample1/core/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declaration": true
  },
  "references": [
    {
      "path": "../tests",
      "circular": true
    }
  ]
}

//// [/user/username/projects/sample1/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }


//// [/user/username/projects/sample1/core/some_decl.d.ts]
declare const dts: any;

//// [/user/username/projects/sample1/core/anotherModule.ts]
export const World = "hello";

//// [/user/username/projects/sample1/logic/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "skipDefaultLibCheck": true
  },
  "references": [
    {
      "path": "../core"
    }
  ]
}

//// [/user/username/projects/sample1/logic/index.ts]
import * as c from '../core/index';
export function getSecondsInDay() {
    return c.multiply(10, 15);
}
import * as mod from '../core/anotherModule';
export const m = mod;


//// [/user/username/projects/sample1/tests/tsconfig.json]
{
  "references": [
    {
      "path": "../core"
    },
    {
      "path": "../logic"
    }
  ],
  "files": [
    "index.ts"
  ],
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "forceConsistentCasingInFileNames": true,
    "skipDefaultLibCheck": true
  }
}

//// [/user/username/projects/sample1/tests/index.ts]
import * as c from '../core/index';
import * as logic from '../logic/index';

c.leftPad("", 10);
logic.getSecondsInDay();

import * as mod from '../core/anotherModule';
export const m = mod;



/a/lib/tsc.js -b -w sample1/tests
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/sample1/core/anotherModule.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
exports.World = "hello";


//// [/user/username/projects/sample1/core/anotherModule.d.ts]
export declare const World = "hello";


//// [/user/username/projects/sample1/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someString = void 0;
exports.leftPad = leftPad;
exports.multiply = multiply;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
function multiply(a, b) { return a * b; }


//// [/user/username/projects/sample1/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;


//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3090574810-export const World = \"hello\";","signature":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-15745098553-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n","signature":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","impliedFormat":1},{"version":"-7959511260-declare const dts: any;","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,4]],"options":{"composite":true,"declaration":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "./anothermodule.ts": {
        "original": {
          "version": "-3090574810-export const World = \"hello\";",
          "signature": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-3090574810-export const World = \"hello\";",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-15745098553-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n",
          "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
          "impliedFormat": 1
        },
        "version": "-15745098553-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "impliedFormat": "commonjs"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-7959511260-declare const dts: any;",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7959511260-declare const dts: any;",
        "signature": "-7959511260-declare const dts: any;",
        "affectsGlobalScope": true,
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
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1393
}

//// [/user/username/projects/sample1/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;;AACA,0CAEC;AAHD,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC"}

//// [/user/username/projects/sample1/logic/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m = void 0;
exports.getSecondsInDay = getSecondsInDay;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
var mod = require("../core/anotherModule");
exports.m = mod;
//# sourceMappingURL=index.js.map

//// [/user/username/projects/sample1/logic/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[4],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
          "impliedFormat": 1
        },
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1494
}

//// [/user/username/projects/sample1/tests/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m = void 0;
var c = require("../core/index");
var logic = require("../logic/index");
c.leftPad("", 10);
logic.getSecondsInDay();
var mod = require("../core/anotherModule");
exports.m = mod;


//// [/user/username/projects/sample1/tests/index.d.ts]
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1},{"version":"-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[5],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
          "impliedFormat": 1
        },
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "../logic/index.d.ts": {
        "original": {
          "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1664
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
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/sample1/core/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/sample1/logic/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/sample1/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/sample1/tests/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/sample1/core/anotherModule.ts: *new*
  {}
/user/username/projects/sample1/core/index.ts: *new*
  {}
/user/username/projects/sample1/core/some_decl.d.ts: *new*
  {}
/user/username/projects/sample1/core/tsconfig.json: *new*
  {}
/user/username/projects/sample1/logic/index.ts: *new*
  {}
/user/username/projects/sample1/logic/tsconfig.json: *new*
  {}
/user/username/projects/sample1/tests/index.ts: *new*
  {}
/user/username/projects/sample1/tests/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/sample1/core: *new*
  {}
/user/username/projects/sample1/logic: *new*
  {}

Program root files: [
  "/user/username/projects/sample1/core/anotherModule.ts",
  "/user/username/projects/sample1/core/index.ts",
  "/user/username/projects/sample1/core/some_decl.d.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/core/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/some_decl.d.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/some_decl.d.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/sample1/core/anothermodule.ts (computed .d.ts during emit)
/user/username/projects/sample1/core/index.ts (computed .d.ts during emit)
/user/username/projects/sample1/core/some_decl.d.ts (used version)

Program root files: [
  "/user/username/projects/sample1/logic/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "sourceMap": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/logic/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/core/anothermodule.d.ts (used version)
/user/username/projects/sample1/logic/index.ts (computed .d.ts during emit)

Program root files: [
  "/user/username/projects/sample1/tests/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/tests/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/core/anothermodule.d.ts (used version)
/user/username/projects/sample1/logic/index.d.ts (used version)
/user/username/projects/sample1/tests/index.ts (computed .d.ts during emit)

exitCode:: ExitStatus.undefined

Change:: Make change to core

Input::
//// [/user/username/projects/sample1/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }

export class someClass { }


Timeout callback:: count: 1
1: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
1: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 1
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...



//// [/user/username/projects/sample1/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someClass = exports.someString = void 0;
exports.leftPad = leftPad;
exports.multiply = multiply;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
function multiply(a, b) { return a * b; }
var someClass = /** @class */ (function () {
    function someClass() {
    }
    return someClass;
}());
exports.someClass = someClass;


//// [/user/username/projects/sample1/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
export declare class someClass {
}


//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3090574810-export const World = \"hello\";","signature":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-14927048853-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n\nexport class someClass { }","signature":"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n","impliedFormat":1},{"version":"-7959511260-declare const dts: any;","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,4]],"options":{"composite":true,"declaration":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "./anothermodule.ts": {
        "original": {
          "version": "-3090574810-export const World = \"hello\";",
          "signature": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-3090574810-export const World = \"hello\";",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-14927048853-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n\nexport class someClass { }",
          "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
          "impliedFormat": 1
        },
        "version": "-14927048853-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n\nexport class someClass { }",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "impliedFormat": "commonjs"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-7959511260-declare const dts: any;",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7959511260-declare const dts: any;",
        "signature": "-7959511260-declare const dts: any;",
        "affectsGlobalScope": true,
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
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1458
}


Timeout callback:: count: 1
2: timerToBuildInvalidatedProject *new*


Program root files: [
  "/user/username/projects/sample1/core/anotherModule.ts",
  "/user/username/projects/sample1/core/index.ts",
  "/user/username/projects/sample1/core/some_decl.d.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/core/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/some_decl.d.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Build logic and tests

Input::

Before running Timeout callback:: count: 1
2: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/sample1/logic/index.js.map] file written with same contents
//// [/user/username/projects/sample1/logic/index.js] file written with same contents
//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[4],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
          "impliedFormat": 1
        },
        "version": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1531
}

//// [/user/username/projects/sample1/tests/index.js] file written with same contents
//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1},{"version":"-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[5],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
          "impliedFormat": 1
        },
        "version": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "../logic/index.d.ts": {
        "original": {
          "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1701
}



Program root files: [
  "/user/username/projects/sample1/logic/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "sourceMap": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/logic/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/logic/index.ts (computed .d.ts)

Program root files: [
  "/user/username/projects/sample1/tests/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/tests/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/tests/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/tests/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Revert core file

Input::
//// [/user/username/projects/sample1/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }



Timeout callback:: count: 1
3: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
3: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 1
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...



//// [/user/username/projects/sample1/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someString = void 0;
exports.leftPad = leftPad;
exports.multiply = multiply;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
function multiply(a, b) { return a * b; }


//// [/user/username/projects/sample1/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;


//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3090574810-export const World = \"hello\";","signature":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-15745098553-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n","signature":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","impliedFormat":1},{"version":"-7959511260-declare const dts: any;","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,4]],"options":{"composite":true,"declaration":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "./anothermodule.ts": {
        "original": {
          "version": "-3090574810-export const World = \"hello\";",
          "signature": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-3090574810-export const World = \"hello\";",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-15745098553-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n",
          "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
          "impliedFormat": 1
        },
        "version": "-15745098553-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "impliedFormat": "commonjs"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-7959511260-declare const dts: any;",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7959511260-declare const dts: any;",
        "signature": "-7959511260-declare const dts: any;",
        "affectsGlobalScope": true,
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
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1393
}


Timeout callback:: count: 1
4: timerToBuildInvalidatedProject *new*


Program root files: [
  "/user/username/projects/sample1/core/anotherModule.ts",
  "/user/username/projects/sample1/core/index.ts",
  "/user/username/projects/sample1/core/some_decl.d.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/core/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/some_decl.d.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Build logic and tests

Input::

Before running Timeout callback:: count: 1
4: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/sample1/logic/index.js.map] file written with same contents
//// [/user/username/projects/sample1/logic/index.js] file written with same contents
//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[4],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
          "impliedFormat": 1
        },
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1494
}

//// [/user/username/projects/sample1/tests/index.js] file written with same contents
//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1},{"version":"-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[5],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
          "impliedFormat": 1
        },
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "../logic/index.d.ts": {
        "original": {
          "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1664
}



Program root files: [
  "/user/username/projects/sample1/logic/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "sourceMap": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/logic/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/logic/index.ts (computed .d.ts)

Program root files: [
  "/user/username/projects/sample1/tests/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/tests/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/tests/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/tests/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Make two changes

Input::
//// [/user/username/projects/sample1/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }

export class someClass { }
export class someClass2 { }


Timeout callback:: count: 1
6: timerToBuildInvalidatedProject *new*

Before running Timeout callback:: count: 1
6: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 1
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...



//// [/user/username/projects/sample1/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someClass2 = exports.someClass = exports.someString = void 0;
exports.leftPad = leftPad;
exports.multiply = multiply;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
function multiply(a, b) { return a * b; }
var someClass = /** @class */ (function () {
    function someClass() {
    }
    return someClass;
}());
exports.someClass = someClass;
var someClass2 = /** @class */ (function () {
    function someClass2() {
    }
    return someClass2;
}());
exports.someClass2 = someClass2;


//// [/user/username/projects/sample1/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
export declare class someClass {
}
export declare class someClass2 {
}


//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3090574810-export const World = \"hello\";","signature":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-10455689311-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n\nexport class someClass { }\nexport class someClass2 { }","signature":"-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n","impliedFormat":1},{"version":"-7959511260-declare const dts: any;","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,4]],"options":{"composite":true,"declaration":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "./anothermodule.ts": {
        "original": {
          "version": "-3090574810-export const World = \"hello\";",
          "signature": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-3090574810-export const World = \"hello\";",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-10455689311-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n\nexport class someClass { }\nexport class someClass2 { }",
          "signature": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
          "impliedFormat": 1
        },
        "version": "-10455689311-export const someString: string = \"HELLO WORLD\";\nexport function leftPad(s: string, n: number) { return s + n; }\nexport function multiply(a: number, b: number) { return a * b; }\n\nexport class someClass { }\nexport class someClass2 { }",
        "signature": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
        "impliedFormat": "commonjs"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-7959511260-declare const dts: any;",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7959511260-declare const dts: any;",
        "signature": "-7959511260-declare const dts: any;",
        "affectsGlobalScope": true,
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
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1525
}


Timeout callback:: count: 1
7: timerToBuildInvalidatedProject *new*


Program root files: [
  "/user/username/projects/sample1/core/anotherModule.ts",
  "/user/username/projects/sample1/core/index.ts",
  "/user/username/projects/sample1/core/some_decl.d.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/core/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/some_decl.d.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Build logic and tests

Input::

Before running Timeout callback:: count: 1
7: timerToBuildInvalidatedProject

Host is moving to new time
After running Timeout callback:: count: 0
Output::
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/sample1/logic/index.js.map] file written with same contents
//// [/user/username/projects/sample1/logic/index.js] file written with same contents
//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[4],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
          "impliedFormat": 1
        },
        "version": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
        "signature": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9623801128-import * as c from '../core/index';\nexport function getSecondsInDay() {\n    return c.multiply(10, 15);\n}\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1569
}

//// [/user/username/projects/sample1/tests/index.js] file written with same contents
//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n","impliedFormat":1},{"version":"-9234818176-export declare const World = \"hello\";\n","impliedFormat":1},{"version":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1},{"version":"-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n","impliedFormat":1}],"root":[5],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
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
      "../core/index.d.ts": {
        "original": {
          "version": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
          "impliedFormat": 1
        },
        "version": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
        "signature": "-1938481101-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\nexport declare class someClass2 {\n}\n",
        "impliedFormat": "commonjs"
      },
      "../core/anothermodule.d.ts": {
        "original": {
          "version": "-9234818176-export declare const World = \"hello\";\n",
          "impliedFormat": 1
        },
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "impliedFormat": "commonjs"
      },
      "../logic/index.d.ts": {
        "original": {
          "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
          "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
          "impliedFormat": 1
        },
        "version": "-11950676699-import * as c from '../core/index';\nimport * as logic from '../logic/index';\n\nc.leftPad(\"\", 10);\nlogic.getSecondsInDay();\n\nimport * as mod from '../core/anotherModule';\nexport const m = mod;\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1739
}



Program root files: [
  "/user/username/projects/sample1/logic/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "sourceMap": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/logic/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/logic/index.ts (computed .d.ts)

Program root files: [
  "/user/username/projects/sample1/tests/index.ts"
]
Program options: {
  "composite": true,
  "declaration": true,
  "forceConsistentCasingInFileNames": true,
  "skipDefaultLibCheck": true,
  "watch": true,
  "configFilePath": "/user/username/projects/sample1/tests/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/tests/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/tests/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined
