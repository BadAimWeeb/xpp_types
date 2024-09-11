import type CaptchaResolverDB from "../common/captcha-resolver-database.js";
import CaptchaResolverBase from "./Base.js";
declare const _default: {
    [key: string]: new (resolverDB: CaptchaResolverDB) => CaptchaResolverBase<any>;
};
export default _default;
