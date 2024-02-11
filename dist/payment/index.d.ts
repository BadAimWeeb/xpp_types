import type { DTSocketServer, ServerContext } from "@badaimweeb/js-dtsocket";
import type { Session } from "@badaimweeb/js-protov2d";
import type { GlobalState, LocalState, EventTable } from "../types.js";
import type Base from "../resolver/Base.js";
export declare function initProcessor(dtServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session>>): void;
export declare function getProcessor(): Processor;
export default class Processor {
    dtServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session>>;
    removeHook: Map<Base<any, any, any>, () => void>;
    constructor(dtServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session>>);
    private _hookTransactions;
    createBankPaymentInstruction(appID: string, appPaymentID: string, resolverID: string, amount: number): Promise<{
        [key: string]: any;
        message: string;
        timeout: number;
    }>;
    createVNPhoneCardTransaction(appID: string, appPaymentID: string, resolverID: string, phoneCardData: {
        telco: string;
        code: string;
        serial: string;
        amount: number;
    }): Promise<{
        status: string;
        reason: string;
        localID: string;
        wouldBeAmount: number;
        actualAmount: number;
        output?: undefined;
    } | {
        status: string;
        output: {
            id: string;
            amount: number;
            originalValue: number;
            currency: string;
            date: Date;
            message: string;
            penalty: boolean;
        };
        localID: string;
        wouldBeAmount: number;
        actualAmount: number;
        reason?: undefined;
    } | {
        status: string;
        localID: string;
        reason?: undefined;
        wouldBeAmount?: undefined;
        actualAmount?: undefined;
        output?: undefined;
    }>;
}
