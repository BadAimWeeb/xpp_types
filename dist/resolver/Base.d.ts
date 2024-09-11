import TypedEmitter from "typed-emitter";
import ResolverDB from "../common/resolver-database.js";
import type { Express } from "express";
import CaptchaResolverBase from "../captcha/Base.js";
declare const ResolverBase_base: new <T_1, M_1>() => TypedEmitter<{
    transaction: (transaction: BaseTransaction & M_1) => void;
    rawTransaction: (transaction: BaseTransaction & M_1) => void;
} & T_1>;
export default abstract class ResolverBase<T, C, M> extends ResolverBase_base<C, M> {
    resolverDB: ResolverDB<T>;
    httpServer: Express;
    captchaResolverMapper: Map<string, CaptchaResolverBase<any>>;
    type: string;
    /** More specific type than {@link type} */
    type1: string;
    /** More specific type than {@link type1} */
    type2: string;
    name: string;
    codename: string;
    /** Contains current running data that is safe for application to handle but not modify. */
    state: Record<string, any>;
    running: boolean;
    constructor(resolverDB: ResolverDB<T>, httpServer: Express, captchaResolverMapper: Map<string, CaptchaResolverBase<any>>);
    abstract init(): void | Promise<void>;
    abstract close(): void | Promise<void>;
    abstract readonly defaultDBValue: T;
}
export type BaseTransaction = {
    /**
     * The ID of the transaction, or notification. Should be unique.
     */
    id: string;
    /**
     * Amount of money involved in the transaction.
     */
    amount: number;
    /**
     * The currency of the transaction.
     */
    currency: string;
    /**
     * The date of the transaction.
     */
    date: Date;
    /**
     * Transaction message.
     */
    message: string;
    /**
     * Which resolver the transaction is from.
     */
    resolver: string;
};
export {};
