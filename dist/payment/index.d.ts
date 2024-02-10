import type { DTSocketServer, ServerContext } from "@badaimweeb/js-dtsocket";
import type { Session } from "@badaimweeb/js-protov2d";
import type { GlobalState, LocalState, EventTable } from "../types.js";
import type Base from "../resolver/Base.js";
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
}
