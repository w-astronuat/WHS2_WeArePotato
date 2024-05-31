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

//// [/src/project/a.ts]
import {A} from "./c"
let a = A.ONE


//// [/src/project/b.d.ts]
export { AWorker as A } from "./worker";


//// [/src/project/c.ts]
import {A} from "./b"
let b = A.ONE
export {A}


//// [/src/project/worker.d.ts]
export const enum AWorker {
    ONE = 1
}




Output::
/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo --preserveConstEnums
exitCode:: ExitStatus.Success


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 1 /* A.ONE */;


//// [/src/project/a.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./worker.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10088995516-export const enum AWorker {\n    ONE = 1\n}\n","impliedFormat":1},{"version":"-6488945853-export { AWorker as A } from \"./worker\";\n","impliedFormat":1},{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","impliedFormat":1},{"version":"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n","impliedFormat":1}],"root":[5],"options":{"preserveConstEnums":true,"tsBuildInfoFile":"./a.tsbuildinfo"},"fileIdsList":[[4],[2],[3]],"referencedMap":[[5,1],[3,2],[4,3]],"semanticDiagnosticsPerFile":[1,5,3,4,2]},"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./worker.d.ts",
      "./b.d.ts",
      "./c.ts",
      "./a.ts"
    ],
    "fileNamesList": [
      [
        "./c.ts"
      ],
      [
        "./worker.d.ts"
      ],
      [
        "./b.d.ts"
      ]
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
      "./worker.d.ts": {
        "original": {
          "version": "-10088995516-export const enum AWorker {\n    ONE = 1\n}\n",
          "impliedFormat": 1
        },
        "version": "-10088995516-export const enum AWorker {\n    ONE = 1\n}\n",
        "signature": "-10088995516-export const enum AWorker {\n    ONE = 1\n}\n",
        "impliedFormat": "commonjs"
      },
      "./b.d.ts": {
        "original": {
          "version": "-6488945853-export { AWorker as A } from \"./worker\";\n",
          "impliedFormat": 1
        },
        "version": "-6488945853-export { AWorker as A } from \"./worker\";\n",
        "signature": "-6488945853-export { AWorker as A } from \"./worker\";\n",
        "impliedFormat": "commonjs"
      },
      "./c.ts": {
        "original": {
          "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
          "impliedFormat": 1
        },
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
          "impliedFormat": 1
        },
        "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./a.ts"
      ]
    ],
    "options": {
      "preserveConstEnums": true,
      "tsBuildInfoFile": "./a.tsbuildinfo"
    },
    "referencedMap": {
      "./a.ts": [
        "./c.ts"
      ],
      "./b.d.ts": [
        "./worker.d.ts"
      ],
      "./c.ts": [
        "./b.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.d.ts",
      "./c.ts",
      "./worker.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1182
}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var b_1 = require("./b");
Object.defineProperty(exports, "A", { enumerable: true, get: function () { return b_1.A; } });
var b = 1 /* A.ONE */;




Change:: change enum value
Input::
//// [/src/project/worker.d.ts]
export const enum AWorker {
    ONE = 2
}




Output::
/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo --preserveConstEnums
exitCode:: ExitStatus.Success


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 2 /* A.ONE */;


//// [/src/project/a.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./worker.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10088959579-export const enum AWorker {\n    ONE = 2\n}\n","impliedFormat":1},{"version":"-6488945853-export { AWorker as A } from \"./worker\";\n","impliedFormat":1},{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","impliedFormat":1},{"version":"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n","impliedFormat":1}],"root":[5],"options":{"preserveConstEnums":true,"tsBuildInfoFile":"./a.tsbuildinfo"},"fileIdsList":[[4],[2],[3]],"referencedMap":[[5,1],[3,2],[4,3]],"semanticDiagnosticsPerFile":[1,5,3,4,2]},"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./worker.d.ts",
      "./b.d.ts",
      "./c.ts",
      "./a.ts"
    ],
    "fileNamesList": [
      [
        "./c.ts"
      ],
      [
        "./worker.d.ts"
      ],
      [
        "./b.d.ts"
      ]
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
      "./worker.d.ts": {
        "original": {
          "version": "-10088959579-export const enum AWorker {\n    ONE = 2\n}\n",
          "impliedFormat": 1
        },
        "version": "-10088959579-export const enum AWorker {\n    ONE = 2\n}\n",
        "signature": "-10088959579-export const enum AWorker {\n    ONE = 2\n}\n",
        "impliedFormat": "commonjs"
      },
      "./b.d.ts": {
        "original": {
          "version": "-6488945853-export { AWorker as A } from \"./worker\";\n",
          "impliedFormat": 1
        },
        "version": "-6488945853-export { AWorker as A } from \"./worker\";\n",
        "signature": "-6488945853-export { AWorker as A } from \"./worker\";\n",
        "impliedFormat": "commonjs"
      },
      "./c.ts": {
        "original": {
          "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
          "impliedFormat": 1
        },
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
          "impliedFormat": 1
        },
        "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./a.ts"
      ]
    ],
    "options": {
      "preserveConstEnums": true,
      "tsBuildInfoFile": "./a.tsbuildinfo"
    },
    "referencedMap": {
      "./a.ts": [
        "./c.ts"
      ],
      "./b.d.ts": [
        "./worker.d.ts"
      ],
      "./c.ts": [
        "./b.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.d.ts",
      "./c.ts",
      "./worker.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1182
}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var b_1 = require("./b");
Object.defineProperty(exports, "A", { enumerable: true, get: function () { return b_1.A; } });
var b = 2 /* A.ONE */;




Change:: change enum value again
Input::
//// [/src/project/worker.d.ts]
export const enum AWorker {
    ONE = 3
}




Output::
/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo --preserveConstEnums
exitCode:: ExitStatus.Success


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 3 /* A.ONE */;


//// [/src/project/a.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./worker.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10088923642-export const enum AWorker {\n    ONE = 3\n}\n","impliedFormat":1},{"version":"-6488945853-export { AWorker as A } from \"./worker\";\n","impliedFormat":1},{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","impliedFormat":1},{"version":"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n","impliedFormat":1}],"root":[5],"options":{"preserveConstEnums":true,"tsBuildInfoFile":"./a.tsbuildinfo"},"fileIdsList":[[4],[2],[3]],"referencedMap":[[5,1],[3,2],[4,3]],"semanticDiagnosticsPerFile":[1,5,3,4,2]},"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./worker.d.ts",
      "./b.d.ts",
      "./c.ts",
      "./a.ts"
    ],
    "fileNamesList": [
      [
        "./c.ts"
      ],
      [
        "./worker.d.ts"
      ],
      [
        "./b.d.ts"
      ]
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
      "./worker.d.ts": {
        "original": {
          "version": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
          "impliedFormat": 1
        },
        "version": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
        "signature": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
        "impliedFormat": "commonjs"
      },
      "./b.d.ts": {
        "original": {
          "version": "-6488945853-export { AWorker as A } from \"./worker\";\n",
          "impliedFormat": 1
        },
        "version": "-6488945853-export { AWorker as A } from \"./worker\";\n",
        "signature": "-6488945853-export { AWorker as A } from \"./worker\";\n",
        "impliedFormat": "commonjs"
      },
      "./c.ts": {
        "original": {
          "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
          "impliedFormat": 1
        },
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
          "impliedFormat": 1
        },
        "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./a.ts"
      ]
    ],
    "options": {
      "preserveConstEnums": true,
      "tsBuildInfoFile": "./a.tsbuildinfo"
    },
    "referencedMap": {
      "./a.ts": [
        "./c.ts"
      ],
      "./b.d.ts": [
        "./worker.d.ts"
      ],
      "./c.ts": [
        "./b.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.d.ts",
      "./c.ts",
      "./worker.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1182
}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var b_1 = require("./b");
Object.defineProperty(exports, "A", { enumerable: true, get: function () { return b_1.A; } });
var b = 3 /* A.ONE */;




Change:: something else changes in b.d.ts
Input::
//// [/src/project/b.d.ts]
export { AWorker as A } from "./worker";
export const randomThing = 10;



Output::
/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo --preserveConstEnums
exitCode:: ExitStatus.Success


//// [/src/project/a.js] file written with same contents
//// [/src/project/a.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./worker.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10088923642-export const enum AWorker {\n    ONE = 3\n}\n","impliedFormat":1},{"version":"-7383473792-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;","impliedFormat":1},{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","signature":"3259150197-import { A } from \"./b\";\nexport { A };\n","impliedFormat":1},{"version":"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n","signature":"-3531856636-export {};\n","impliedFormat":1}],"root":[5],"options":{"preserveConstEnums":true,"tsBuildInfoFile":"./a.tsbuildinfo"},"fileIdsList":[[4],[2],[3]],"referencedMap":[[5,1],[3,2],[4,3]],"semanticDiagnosticsPerFile":[1,5,3,4,2]},"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./worker.d.ts",
      "./b.d.ts",
      "./c.ts",
      "./a.ts"
    ],
    "fileNamesList": [
      [
        "./c.ts"
      ],
      [
        "./worker.d.ts"
      ],
      [
        "./b.d.ts"
      ]
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
      "./worker.d.ts": {
        "original": {
          "version": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
          "impliedFormat": 1
        },
        "version": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
        "signature": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
        "impliedFormat": "commonjs"
      },
      "./b.d.ts": {
        "original": {
          "version": "-7383473792-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;",
          "impliedFormat": 1
        },
        "version": "-7383473792-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;",
        "signature": "-7383473792-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;",
        "impliedFormat": "commonjs"
      },
      "./c.ts": {
        "original": {
          "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
          "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n",
          "impliedFormat": 1
        },
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./a.ts"
      ]
    ],
    "options": {
      "preserveConstEnums": true,
      "tsBuildInfoFile": "./a.tsbuildinfo"
    },
    "referencedMap": {
      "./a.ts": [
        "./c.ts"
      ],
      "./b.d.ts": [
        "./worker.d.ts"
      ],
      "./c.ts": [
        "./b.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.d.ts",
      "./c.ts",
      "./worker.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1320
}

//// [/src/project/c.js] file written with same contents


Change:: something else changes in b.d.ts again
Input::
//// [/src/project/b.d.ts]
export { AWorker as A } from "./worker";
export const randomThing = 10;export const randomThing2 = 10;



Output::
/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo --preserveConstEnums
exitCode:: ExitStatus.Success


//// [/src/project/a.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./worker.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-10088923642-export const enum AWorker {\n    ONE = 3\n}\n","impliedFormat":1},{"version":"2191846063-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;export const randomThing2 = 10;","impliedFormat":1},{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","signature":"3259150197-import { A } from \"./b\";\nexport { A };\n","impliedFormat":1},{"version":"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n","impliedFormat":1}],"root":[5],"options":{"preserveConstEnums":true,"tsBuildInfoFile":"./a.tsbuildinfo"},"fileIdsList":[[4],[2],[3]],"referencedMap":[[5,1],[3,2],[4,3]],"semanticDiagnosticsPerFile":[1,5,3,4,2]},"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./worker.d.ts",
      "./b.d.ts",
      "./c.ts",
      "./a.ts"
    ],
    "fileNamesList": [
      [
        "./c.ts"
      ],
      [
        "./worker.d.ts"
      ],
      [
        "./b.d.ts"
      ]
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
      "./worker.d.ts": {
        "original": {
          "version": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
          "impliedFormat": 1
        },
        "version": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
        "signature": "-10088923642-export const enum AWorker {\n    ONE = 3\n}\n",
        "impliedFormat": "commonjs"
      },
      "./b.d.ts": {
        "original": {
          "version": "2191846063-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;export const randomThing2 = 10;",
          "impliedFormat": 1
        },
        "version": "2191846063-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;export const randomThing2 = 10;",
        "signature": "2191846063-export { AWorker as A } from \"./worker\";\nexport const randomThing = 10;export const randomThing2 = 10;",
        "impliedFormat": "commonjs"
      },
      "./c.ts": {
        "original": {
          "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
          "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n",
          "impliedFormat": 1
        },
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n",
        "impliedFormat": "commonjs"
      },
      "./a.ts": {
        "original": {
          "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
          "impliedFormat": 1
        },
        "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        5,
        "./a.ts"
      ]
    ],
    "options": {
      "preserveConstEnums": true,
      "tsBuildInfoFile": "./a.tsbuildinfo"
    },
    "referencedMap": {
      "./a.ts": [
        "./c.ts"
      ],
      "./b.d.ts": [
        "./worker.d.ts"
      ],
      "./c.ts": [
        "./b.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.d.ts",
      "./c.ts",
      "./worker.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1311
}

//// [/src/project/c.js] file written with same contents
