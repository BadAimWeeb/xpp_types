import { Express } from 'express';
import type Base from './resolver/Base.js';
import type TypedEmitter from 'typed-emitter';
export declare const resolverMapper: Map<string, Base<any, any, any>>;
export declare const newResolverEvent: TypedEmitter<{
    newResolver: (resolver: Base<any, any, any>) => void;
    closeResolver: (resolver: Base<any, any, any>) => void;
}>;
export default function (httpServer: Express): Promise<void>;
