import CaptchaResolverBase from "./Base.js";
export default class NopeCHA extends CaptchaResolverBase<{
    apiKey: string;
}, {}> {
    static name: string;
    static flags: {
        Text: boolean;
        ManualImage: boolean;
        ReCaptchaV2: boolean;
    };
    private api?;
    resolveCaptchaText(question: string): Promise<string>;
    init(): Promise<void>;
    close(): void;
    resolveCaptchaNormalImage(image: Buffer | Uint8Array | string): Promise<string>;
    resolveCaptchaReCaptchaV2(siteKey: string, pageUrl: string): Promise<string>;
}
