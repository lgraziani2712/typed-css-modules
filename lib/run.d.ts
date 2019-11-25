interface RunOptions {
    pattern?: string;
    outDir?: string;
    watch?: boolean;
    camelCase?: boolean;
    singleQuote?: boolean;
    dropExtension?: boolean;
    silent?: boolean;
}
export declare function run(searchDir: string, options?: RunOptions): Promise<void>;
export {};
