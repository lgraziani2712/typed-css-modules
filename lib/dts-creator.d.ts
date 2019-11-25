import { DtsContent } from './dts-content';
import { Plugin } from 'postcss';
declare type CamelCaseOption = boolean | 'dashes' | undefined;
interface DtsCreatorOptions {
    rootDir?: string;
    searchDir?: string;
    outDir?: string;
    camelCase?: CamelCaseOption;
    singleQuote?: boolean;
    dropExtension?: boolean;
    EOL?: string;
    loaderPlugins?: Plugin<any>[];
}
export declare class DtsCreator {
    private rootDir;
    private searchDir;
    private outDir;
    private loader;
    private inputDirectory;
    private outputDirectory;
    private singleQuote?;
    private camelCase;
    private dropExtension;
    private EOL;
    constructor(options?: DtsCreatorOptions);
    create(filePath: string, initialContents?: string, clearCache?: boolean): Promise<DtsContent>;
    private getConvertKeyMethod;
    /**
     * Replaces only the dashes and leaves the rest as-is.
     *
     * Mirrors the behaviour of the css-loader:
     * https://github.com/webpack-contrib/css-loader/blob/1fee60147b9dba9480c9385e0f4e581928ab9af9/lib/compile-exports.js#L3-L7
     */
    private dashesCamelCase;
}
export {};
