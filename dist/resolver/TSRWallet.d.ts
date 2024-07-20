import Base from "./Base.js";
export default class TSRWallet extends Base<{
    cookie: string;
    clockTime: number;
    timeout: number;
}, {}, {
    old: number;
    new: number;
}> {
    #private;
    type: string;
    type1: string;
    type2: string;
    name: string;
    codename: string;
    state: {
        username: string;
    };
    createPaymentInstruction(appShort: string, appPaymentID: string, localID: string, amount: number): {
        account: string;
        amount: number;
        message: string;
        timeout: number;
        localID: string;
    };
    knownTransactions: Set<string>;
    readonly defaultDBValue: {
        cookie: string;
        clockTime: number;
        timeout: number;
    };
    checking: boolean;
    failedCount: number;
    csrf: string | null;
    init(): Promise<void>;
    getAccountName(identifier: string, retry?: boolean): Promise<string>;
    check(): Promise<void>;
    close(): void;
}
