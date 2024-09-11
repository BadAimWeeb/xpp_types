import type ResolverDB from "../common/resolver-database.js";
import type { Express } from "express";
import ResolverBase from "./Base.js";
import CaptchaResolverBase from "../captcha/Base.js";
declare const _default: {
    [key: string]: new (resolverDB: ResolverDB, httpServer: Express, captchaResolverMapping: Map<string, CaptchaResolverBase<any>>) => ResolverBase<any, any, any>;
};
export default _default;
