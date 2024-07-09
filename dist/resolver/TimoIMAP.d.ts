import Base from "./Base.js";
import ImapFlow from "imapflow";
export default class TimoIMAP extends Base<{
    account: string;
    timeout: number;
    manualCheck: number;
    imapHost: string;
    imapPort: number;
    imapSecure: boolean;
    imapUsername: string;
    dkimSelfVerify: boolean;
} & ({
    imapPassword: string;
} | {
    imapOauth2: string;
}), {}, {}> {
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
        bank: string;
        vqrDeeplink: string;
        qr: string;
    };
    knownTransactions: Set<string>;
    readonly defaultDBValue: {
        account: string;
        imapHost: string;
        imapPort: number;
        imapSecure: boolean;
        imapUsername: string;
        imapPassword: string;
        manualCheck: number;
        timeout: number;
        dkimSelfVerify: boolean;
    };
    _lock: ImapFlow.MailboxLockObject | null;
    client: ImapFlow.ImapFlow | null;
    _clock: ReturnType<typeof setInterval> | null;
    checking: boolean;
    failedCount: number;
    init(): Promise<void>;
    _processMessage(message: ImapFlow.FetchMessageObject, dkimCheck: boolean): Promise<void>;
    close(): void;
}
