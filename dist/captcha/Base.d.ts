import CaptchaResolverDB from "../common/captcha-resolver-database.js";
export default abstract class CaptchaResolverBase<T, E extends Partial<{
    text: any;
    normalImage: any;
}> = {}> {
    resolverDB: CaptchaResolverDB<T>;
    static name: string;
    static flags: Record<("Text" | "ManualImage" | "ReCaptchaV2"), boolean>;
    constructor(resolverDB: CaptchaResolverDB<T>);
    abstract init(): void | Promise<void>;
    abstract close(): void | Promise<void>;
    abstract resolveCaptchaText(question: string, extraInput?: E["text"]): Promise<string>;
    /** If string, input Base64-encoded data URI only. */
    abstract resolveCaptchaNormalImage(image: Buffer | Uint8Array | string, extraInput?: E["normalImage"]): Promise<string>;
    abstract resolveCaptchaReCaptchaV2(siteKey: string, pageUrl: string): Promise<string>;
}
