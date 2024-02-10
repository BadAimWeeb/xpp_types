import TypedEmitter from "typed-emitter";
import ResolverDB from "../common/resolver-database.js";
import type { Express } from "express";
declare const Base_base: new <T_1, M_1>() => TypedEmitter<{
    transaction: (transaction: BaseTransaction & M_1) => void;
    rawTransaction: (transaction: BaseTransaction & M_1) => void;
} & T_1>;
export default abstract class Base<T, C, M> extends Base_base<C, M> {
    resolverDB: ResolverDB<T>;
    httpServer: Express;
    type: string;
    running: boolean;
    constructor(resolverDB: ResolverDB<T>, httpServer: Express);
    abstract init(): void;
    abstract close(): void;
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
};
export {};
