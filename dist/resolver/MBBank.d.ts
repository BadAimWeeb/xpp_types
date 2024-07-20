import Base from "./Base.js";
export default class MBBankCasso extends Base<{
    account: string;
    timeout: number;
    username: string;
    password: string;
    clockTime: number;
    deviceID?: string;
    sessionID?: string;
}, {}, {}> {
    #private;
    type: string;
    type1: string;
    type2: string;
    name: string;
    codename: string;
    state: {
        account: string;
    };
    createPaymentInstruction(appShort: string, appPaymentID: string, localID: string, amount: number): {
        account: string;
        amount: number;
        message: string;
        timeout: number;
        qr: string;
        bank: string;
        vqrDeeplink: string;
        localID: string;
    };
    knownTransactions: Set<string>;
    readonly defaultDBValue: {
        account: string;
        timeout: number;
        username: string;
        password: string;
        clockTime: number;
    };
    checking: boolean;
    init(): Promise<void>;
    private _clLock;
    private _checkLogin;
    getAccountName(bin: string, account: string): Promise<string>;
    check(): Promise<void>;
    private _generateSessionID;
    close(): void;
}
