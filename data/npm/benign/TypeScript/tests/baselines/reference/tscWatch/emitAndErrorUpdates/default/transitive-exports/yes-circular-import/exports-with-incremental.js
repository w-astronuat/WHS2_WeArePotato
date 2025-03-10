currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/lib1/tools/toolsinterface.ts]
export interface ITest {
    title: string;
}

//// [/user/username/projects/myproject/lib1/tools/public.ts]
export * from "./toolsinterface";

//// [/user/username/projects/myproject/app.ts]
import { Data } from "lib2/public";
export class App {
    public constructor() {
        new Data().test();
    }
}

//// [/user/username/projects/myproject/lib2/public.ts]
export * from "./data";

//// [/user/username/projects/myproject/lib1/public.ts]
export * from "./tools/public";

//// [/user/username/projects/myproject/lib2/data.ts]
import { ITest } from "lib1/public"; import { Data2 } from "./data2";
export class Data {
    public dat?: Data2; public test() {
        const result: ITest = {
            title: "title"
        }
        return result;
    }
}

//// [/user/username/projects/myproject/lib2/data2.ts]
import { Data } from "./data";
export class Data2 {
    public dat?: Data;
}

//// [/user/username/projects/myproject/tsconfig.json]
{
  "files": [
    "app.ts"
  ],
  "compilerOptions": {
    "baseUrl": "."
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


/a/lib/tsc.js --w --incremental
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/myproject/lib1/tools/toolsinterface.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/user/username/projects/myproject/lib1/tools/public.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./toolsinterface"), exports);


//// [/user/username/projects/myproject/lib1/public.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./tools/public"), exports);


//// [/user/username/projects/myproject/lib2/data2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data2 = void 0;
var Data2 = /** @class */ (function () {
    function Data2() {
    }
    return Data2;
}());
exports.Data2 = Data2;


//// [/user/username/projects/myproject/lib2/data.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.test = function () {
        var result = {
            title: "title"
        };
        return result;
    };
    return Data;
}());
exports.Data = Data;


//// [/user/username/projects/myproject/lib2/public.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./data"), exports);


//// [/user/username/projects/myproject/app.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var public_1 = require("lib2/public");
var App = /** @class */ (function () {
    function App() {
        new public_1.Data().test();
    }
    return App;
}());
exports.App = App;


//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/toolsinterface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-4369626085-export interface ITest {\n    title: string;\n}","impliedFormat":1},{"version":"-10750058173-export * from \"./toolsinterface\";","impliedFormat":1},{"version":"-5078933600-export * from \"./tools/public\";","impliedFormat":1},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","impliedFormat":1},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","impliedFormat":1},{"version":"-9530042629-export * from \"./data\";","impliedFormat":1},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","impliedFormat":1}],"root":[8],"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,6,5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/toolsinterface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/toolsinterface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
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
      "./lib1/tools/toolsinterface.ts": {
        "original": {
          "version": "-4369626085-export interface ITest {\n    title: string;\n}",
          "impliedFormat": 1
        },
        "version": "-4369626085-export interface ITest {\n    title: string;\n}",
        "signature": "-4369626085-export interface ITest {\n    title: string;\n}",
        "impliedFormat": "commonjs"
      },
      "./lib1/tools/public.ts": {
        "original": {
          "version": "-10750058173-export * from \"./toolsinterface\";",
          "impliedFormat": 1
        },
        "version": "-10750058173-export * from \"./toolsinterface\";",
        "signature": "-10750058173-export * from \"./toolsinterface\";",
        "impliedFormat": "commonjs"
      },
      "./lib1/public.ts": {
        "original": {
          "version": "-5078933600-export * from \"./tools/public\";",
          "impliedFormat": 1
        },
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-5078933600-export * from \"./tools/public\";",
        "impliedFormat": "commonjs"
      },
      "./lib2/data2.ts": {
        "original": {
          "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
          "impliedFormat": 1
        },
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "impliedFormat": "commonjs"
      },
      "./lib2/data.ts": {
        "original": {
          "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
          "impliedFormat": 1
        },
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "impliedFormat": "commonjs"
      },
      "./lib2/public.ts": {
        "original": {
          "version": "-9530042629-export * from \"./data\";",
          "impliedFormat": 1
        },
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9530042629-export * from \"./data\";",
        "impliedFormat": "commonjs"
      },
      "./app.ts": {
        "original": {
          "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
          "impliedFormat": 1
        },
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        8,
        "./app.ts"
      ]
    ],
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/toolsinterface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/toolsinterface.ts",
      "./lib2/data.ts",
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1710
}


PolledWatches::
/user/username/projects/myproject/lib1/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/lib1/tools/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/lib2/package.json: *new*
  {"pollingInterval":2000}
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
/user/username/projects/myproject/app.ts: *new*
  {}
/user/username/projects/myproject/lib1/public.ts: *new*
  {}
/user/username/projects/myproject/lib1/tools/public.ts: *new*
  {}
/user/username/projects/myproject/lib1/tools/toolsinterface.ts: *new*
  {}
/user/username/projects/myproject/lib2/data.ts: *new*
  {}
/user/username/projects/myproject/lib2/data2.ts: *new*
  {}
/user/username/projects/myproject/lib2/public.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

Program root files: [
  "/user/username/projects/myproject/app.ts"
]
Program options: {
  "baseUrl": "/user/username/projects/myproject",
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/lib1/tools/toolsinterface.ts (used version)
/user/username/projects/myproject/lib1/tools/public.ts (used version)
/user/username/projects/myproject/lib1/public.ts (used version)
/user/username/projects/myproject/lib2/data2.ts (used version)
/user/username/projects/myproject/lib2/data.ts (used version)
/user/username/projects/myproject/lib2/public.ts (used version)
/user/username/projects/myproject/app.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Rename property title to title2 of interface ITest to initialize signatures

Input::
//// [/user/username/projects/myproject/lib1/tools/toolsinterface.ts]
export interface ITest {
    title2: string;
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

[96mlib2/data.ts[0m:[93m5[0m:[93m13[0m - [91merror[0m[90m TS2561: [0mObject literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?

[7m5[0m             title: "title"
[7m [0m [91m            ~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/user/username/projects/myproject/lib1/tools/toolsinterface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents
//// [/user/username/projects/myproject/lib1/public.js] file written with same contents
//// [/user/username/projects/myproject/lib2/data2.js] file written with same contents
//// [/user/username/projects/myproject/lib2/data.js] file written with same contents
//// [/user/username/projects/myproject/lib2/public.js] file written with same contents
//// [/user/username/projects/myproject/app.js] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/toolsinterface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3501597171-export interface ITest {\n    title2: string;\n}","signature":"-3883556937-export interface ITest {\n    title2: string;\n}\n","impliedFormat":1},{"version":"-10750058173-export * from \"./toolsinterface\";","signature":"-11154536019-export * from \"./toolsinterface\";\n","impliedFormat":1},{"version":"-5078933600-export * from \"./tools/public\";","signature":"-4396051542-export * from \"./tools/public\";\n","impliedFormat":1},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","signature":"-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n","impliedFormat":1},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","signature":"-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n","impliedFormat":1},{"version":"-9530042629-export * from \"./data\";","signature":"-9548728731-export * from \"./data\";\n","impliedFormat":1},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","signature":"-18990360330-export declare class App {\n    constructor();\n}\n","impliedFormat":1}],"root":[8],"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,[6,[{"file":"./lib2/data.ts","start":174,"length":5,"code":2561,"category":1,"messageText":"Object literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?"}]],5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/toolsinterface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/toolsinterface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
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
      "./lib1/tools/toolsinterface.ts": {
        "original": {
          "version": "-3501597171-export interface ITest {\n    title2: string;\n}",
          "signature": "-3883556937-export interface ITest {\n    title2: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-3501597171-export interface ITest {\n    title2: string;\n}",
        "signature": "-3883556937-export interface ITest {\n    title2: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./lib1/tools/public.ts": {
        "original": {
          "version": "-10750058173-export * from \"./toolsinterface\";",
          "signature": "-11154536019-export * from \"./toolsinterface\";\n",
          "impliedFormat": 1
        },
        "version": "-10750058173-export * from \"./toolsinterface\";",
        "signature": "-11154536019-export * from \"./toolsinterface\";\n",
        "impliedFormat": "commonjs"
      },
      "./lib1/public.ts": {
        "original": {
          "version": "-5078933600-export * from \"./tools/public\";",
          "signature": "-4396051542-export * from \"./tools/public\";\n",
          "impliedFormat": 1
        },
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-4396051542-export * from \"./tools/public\";\n",
        "impliedFormat": "commonjs"
      },
      "./lib2/data2.ts": {
        "original": {
          "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
          "signature": "-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n",
          "impliedFormat": 1
        },
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./lib2/data.ts": {
        "original": {
          "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
          "signature": "-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n",
          "impliedFormat": 1
        },
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./lib2/public.ts": {
        "original": {
          "version": "-9530042629-export * from \"./data\";",
          "signature": "-9548728731-export * from \"./data\";\n",
          "impliedFormat": 1
        },
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9548728731-export * from \"./data\";\n",
        "impliedFormat": "commonjs"
      },
      "./app.ts": {
        "original": {
          "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
          "signature": "-18990360330-export declare class App {\n    constructor();\n}\n",
          "impliedFormat": 1
        },
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-18990360330-export declare class App {\n    constructor();\n}\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        8,
        "./app.ts"
      ]
    ],
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/toolsinterface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/toolsinterface.ts",
      [
        "./lib2/data.ts",
        [
          {
            "file": "./lib2/data.ts",
            "start": 174,
            "length": 5,
            "code": 2561,
            "category": 1,
            "messageText": "Object literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?"
          }
        ]
      ],
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 2554
}



Program root files: [
  "/user/username/projects/myproject/app.ts"
]
Program options: {
  "baseUrl": "/user/username/projects/myproject",
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/lib1/tools/toolsinterface.ts (computed .d.ts)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts)
/user/username/projects/myproject/lib1/public.ts (computed .d.ts)
/user/username/projects/myproject/lib2/data.ts (computed .d.ts)
/user/username/projects/myproject/lib2/public.ts (computed .d.ts)
/user/username/projects/myproject/app.ts (computed .d.ts)
/user/username/projects/myproject/lib2/data2.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Rename property title2 to title of interface ITest to revert back to original text

Input::
//// [/user/username/projects/myproject/lib1/tools/toolsinterface.ts]
export interface ITest {
    title: string;
}


Timeout callback:: count: 1
2: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
2: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/myproject/lib1/tools/toolsinterface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/toolsinterface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-4369626085-export interface ITest {\n    title: string;\n}","signature":"-2463740027-export interface ITest {\n    title: string;\n}\n","impliedFormat":1},{"version":"-10750058173-export * from \"./toolsinterface\";","signature":"-11154536019-export * from \"./toolsinterface\";\n","impliedFormat":1},{"version":"-5078933600-export * from \"./tools/public\";","impliedFormat":1},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","impliedFormat":1},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","impliedFormat":1},{"version":"-9530042629-export * from \"./data\";","impliedFormat":1},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","impliedFormat":1}],"root":[8],"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,6,5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/toolsinterface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/toolsinterface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
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
      "./lib1/tools/toolsinterface.ts": {
        "original": {
          "version": "-4369626085-export interface ITest {\n    title: string;\n}",
          "signature": "-2463740027-export interface ITest {\n    title: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-4369626085-export interface ITest {\n    title: string;\n}",
        "signature": "-2463740027-export interface ITest {\n    title: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./lib1/tools/public.ts": {
        "original": {
          "version": "-10750058173-export * from \"./toolsinterface\";",
          "signature": "-11154536019-export * from \"./toolsinterface\";\n",
          "impliedFormat": 1
        },
        "version": "-10750058173-export * from \"./toolsinterface\";",
        "signature": "-11154536019-export * from \"./toolsinterface\";\n",
        "impliedFormat": "commonjs"
      },
      "./lib1/public.ts": {
        "original": {
          "version": "-5078933600-export * from \"./tools/public\";",
          "impliedFormat": 1
        },
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-5078933600-export * from \"./tools/public\";",
        "impliedFormat": "commonjs"
      },
      "./lib2/data2.ts": {
        "original": {
          "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
          "impliedFormat": 1
        },
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "impliedFormat": "commonjs"
      },
      "./lib2/data.ts": {
        "original": {
          "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
          "impliedFormat": 1
        },
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "impliedFormat": "commonjs"
      },
      "./lib2/public.ts": {
        "original": {
          "version": "-9530042629-export * from \"./data\";",
          "impliedFormat": 1
        },
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9530042629-export * from \"./data\";",
        "impliedFormat": "commonjs"
      },
      "./app.ts": {
        "original": {
          "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
          "impliedFormat": 1
        },
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        8,
        "./app.ts"
      ]
    ],
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/toolsinterface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/toolsinterface.ts",
      "./lib2/data.ts",
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1851
}



Program root files: [
  "/user/username/projects/myproject/app.ts"
]
Program options: {
  "baseUrl": "/user/username/projects/myproject",
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/lib1/tools/toolsinterface.ts (computed .d.ts)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts)
/user/username/projects/myproject/lib1/public.ts (used version)
/user/username/projects/myproject/lib2/data.ts (used version)
/user/username/projects/myproject/lib2/data2.ts (used version)
/user/username/projects/myproject/lib2/public.ts (used version)
/user/username/projects/myproject/app.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Rename property title to title2 of interface ITest

Input::
//// [/user/username/projects/myproject/lib1/tools/toolsinterface.ts]
export interface ITest {
    title2: string;
}


Timeout callback:: count: 1
3: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
3: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96mlib2/data.ts[0m:[93m5[0m:[93m13[0m - [91merror[0m[90m TS2561: [0mObject literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?

[7m5[0m             title: "title"
[7m [0m [91m            ~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/user/username/projects/myproject/lib1/tools/toolsinterface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/toolsinterface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3501597171-export interface ITest {\n    title2: string;\n}","signature":"-3883556937-export interface ITest {\n    title2: string;\n}\n","impliedFormat":1},{"version":"-10750058173-export * from \"./toolsinterface\";","signature":"-11154536019-export * from \"./toolsinterface\";\n","impliedFormat":1},{"version":"-5078933600-export * from \"./tools/public\";","impliedFormat":1},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","impliedFormat":1},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","impliedFormat":1},{"version":"-9530042629-export * from \"./data\";","impliedFormat":1},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","impliedFormat":1}],"root":[8],"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,[6,[{"file":"./lib2/data.ts","start":174,"length":5,"code":2561,"category":1,"messageText":"Object literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?"}]],5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/toolsinterface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/toolsinterface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
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
      "./lib1/tools/toolsinterface.ts": {
        "original": {
          "version": "-3501597171-export interface ITest {\n    title2: string;\n}",
          "signature": "-3883556937-export interface ITest {\n    title2: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-3501597171-export interface ITest {\n    title2: string;\n}",
        "signature": "-3883556937-export interface ITest {\n    title2: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./lib1/tools/public.ts": {
        "original": {
          "version": "-10750058173-export * from \"./toolsinterface\";",
          "signature": "-11154536019-export * from \"./toolsinterface\";\n",
          "impliedFormat": 1
        },
        "version": "-10750058173-export * from \"./toolsinterface\";",
        "signature": "-11154536019-export * from \"./toolsinterface\";\n",
        "impliedFormat": "commonjs"
      },
      "./lib1/public.ts": {
        "original": {
          "version": "-5078933600-export * from \"./tools/public\";",
          "impliedFormat": 1
        },
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-5078933600-export * from \"./tools/public\";",
        "impliedFormat": "commonjs"
      },
      "./lib2/data2.ts": {
        "original": {
          "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
          "impliedFormat": 1
        },
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "impliedFormat": "commonjs"
      },
      "./lib2/data.ts": {
        "original": {
          "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
          "impliedFormat": 1
        },
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "impliedFormat": "commonjs"
      },
      "./lib2/public.ts": {
        "original": {
          "version": "-9530042629-export * from \"./data\";",
          "impliedFormat": 1
        },
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9530042629-export * from \"./data\";",
        "impliedFormat": "commonjs"
      },
      "./app.ts": {
        "original": {
          "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
          "impliedFormat": 1
        },
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        8,
        "./app.ts"
      ]
    ],
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/toolsinterface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/toolsinterface.ts",
      [
        "./lib2/data.ts",
        [
          {
            "file": "./lib2/data.ts",
            "start": 174,
            "length": 5,
            "code": 2561,
            "category": 1,
            "messageText": "Object literal may only specify known properties, but 'title' does not exist in type 'ITest'. Did you mean to write 'title2'?"
          }
        ]
      ],
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 2073
}



Program root files: [
  "/user/username/projects/myproject/app.ts"
]
Program options: {
  "baseUrl": "/user/username/projects/myproject",
  "watch": true,
  "incremental": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/toolsinterface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/lib1/tools/toolsinterface.ts (computed .d.ts)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts)
/user/username/projects/myproject/lib1/public.ts (used version)
/user/username/projects/myproject/lib2/data.ts (used version)
/user/username/projects/myproject/lib2/data2.ts (used version)
/user/username/projects/myproject/lib2/public.ts (used version)
/user/username/projects/myproject/app.ts (used version)

exitCode:: ExitStatus.undefined
