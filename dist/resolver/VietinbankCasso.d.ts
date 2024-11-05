import ResolverBase from "./Base.js";
export default class VietinbankCasso extends ResolverBase<{
    account: string;
    timeout: number;
    secretKey: string;
    listenPath?: string;
}, {}, {}> {
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
        currency: string;
    };
    knownTransactions: Set<string>;
    readonly defaultDBValue: {
        account: string;
        secretKey: string;
        listenPath: string;
        timeout: number;
    };
    init(): Promise<void>;
    close(): void;
}
