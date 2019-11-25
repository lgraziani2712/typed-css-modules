interface DtsContentOptions {
    dropExtension: boolean;
    rootDir: string;
    searchDir: string;
    outDir: string;
    rInputPath: string;
    rawTokenList: string[];
    resultList: string[];
    EOL: string;
    singleQuote?: boolean;
}
export declare class DtsContent {
    private dropExtension;
    private rootDir;
    private searchDir;
    private outDir;
    private singleQuote?;
    private rInputPath;
    private rawTokenList;
    private resultList;
    private EOL;
    constructor(options: DtsContentOptions);
    readonly contents: string[];
    readonly formatted: string;
    readonly tokens: string[];
    readonly outputFilePath: string;
    readonly inputFilePath: string;
    writeFile(postprocessor?: (formatted: string) => string): Promise<void>;
}
export {};
