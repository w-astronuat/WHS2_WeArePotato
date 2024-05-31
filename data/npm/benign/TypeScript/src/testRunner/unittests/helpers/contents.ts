import * as ts from "../../_namespaces/ts.js";
import { libFile } from "./virtualFileSystemWithWatch.js";

export function compilerOptionsToConfigJson(options: ts.CompilerOptions) {
    return ts.optionMapToObject(ts.serializeCompilerOptions(options));
}

export const libContent = `${libFile.content}
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };`;

export const symbolLibContent = `
interface SymbolConstructor {
    readonly species: symbol;
    readonly toStringTag: symbol;
}
declare var Symbol: SymbolConstructor;
interface Symbol {
    readonly [Symbol.toStringTag]: string;
}
`;

export interface FsContents {
    [path: string]: string;
}

export function libPath(forLib: string) {
    return `${ts.getDirectoryPath(libFile.path)}/lib.${forLib}.d.ts`;
}

export function getProjectConfigWithNodeNext(withNodeNext: boolean | undefined) {
    return withNodeNext ? { module: "nodenext", target: "es5" } : undefined;
}
