import { Express } from 'express';
import type ResolverBase from './resolver/Base.js';
import type TypedEmitter from 'typed-emitter';
import CaptchaResolverBase from './captcha/Base.js';
export declare const captchaResolverMapper: Map<string, CaptchaResolverBase<any, {}>>;
export declare const resolverMapper: Map<string, ResolverBase<any, any, any>>;
export declare const newResolverEvent: TypedEmitter<{
    newResolver: (resolver: ResolverBase<any, any, any>) => void;
    closeResolver: (resolver: ResolverBase<any, any, any>) => void;
}>;
export default function (httpServer: Express): Promise<void>;
