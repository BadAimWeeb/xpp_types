import CaptchaResolverDB from "../common/captcha-resolver-database.js";
export default abstract class CaptchaResolverBase<T, E extends Partial<{
    text: any;
    manualImage: any;
}> = {}> {
    resolverDB: CaptchaResolverDB<T>;
    static name: string;
    static flags: Record<("Text" | "ManualImage"), boolean>;
    constructor(resolverDB: CaptchaResolverDB<T>);
    abstract init(): void | Promise<void>;
    abstract close(): void | Promise<void>;
    /** If string, input Base64-encoded data URI only. */
    abstract resolveCaptchaText(image: Buffer | Uint8Array | string, extraInput?: E["text"]): Promise<string>;
    /** If string, input Base64-encoded data URI only. */
    abstract resolveCaptchaManualImage(image: Buffer | Uint8Array | string, extraInput?: E["manualImage"]): Promise<string>;
}
