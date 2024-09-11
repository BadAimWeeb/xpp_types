import CaptchaResolverBase from "./Base.js";
export default class NopeCHA extends CaptchaResolverBase<{
    apiKey: string;
}, {}> {
    static name: string;
    static flags: {
        Text: boolean;
        ManualImage: boolean;
    };
    private api?;
    resolveCaptchaText(image: Buffer | Uint8Array | string): Promise<string>;
    init(): Promise<void>;
    close(): void;
    resolveCaptchaManualImage(image: Buffer | Uint8Array | string): Promise<string>;
}
