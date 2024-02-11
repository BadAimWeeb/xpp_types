import Base from "./Base.js";
type CallbackData = {
    status: number;
    message: string;
    request_id: string;
    declared_value: number;
    value: number;
    amount: number;
    code: string;
    serial: string;
    telco: string;
    trans_id: number;
    callback_sign: string;
};
/**
 * Generic resolver for 5740908:TVYJ5Ggr-compatible API set, used by TheSieuRe and Gachthe1s.
 */
export default class GenericVNPhoneCard1 extends Base<{
    target: string;
    listenPath?: string;
    partnerID: string;
    partnerKey: string;
}, {
    chargeFailedMessage: (requestID: string, data: CallbackData) => void;
}, {
    originalValue: number;
    penalty: boolean;
}> {
    type: string;
    type1: string;
    type2: string;
    name: string;
    code: string;
    state: {
        target: string;
    };
    knownTransactions: Set<string>;
    readonly defaultDBValue: {
        target: string;
        partnerID: string;
        partnerKey: string;
    };
    checking: boolean;
    init(): Promise<void>;
    resolveHTTP(req: Parameters<Parameters<typeof this["httpServer"]["use"]>["1"]>["0"], res: Parameters<Parameters<typeof this["httpServer"]["use"]>["1"]>["1"]): void;
    generateMessage(appShort: string, appPaymentID: string, localID: string): Promise<string>;
    charge(message: string, telecom: string, value: number, code: string, serial: string): Promise<{
        id: string;
        amount: number;
        originalValue: number;
        currency: string;
        date: Date;
        message: string;
        penalty: boolean;
    } | null>;
    getFee(): Promise<{
        [telco: string]: {
            [value: string]: {
                fees: number;
                penalty: number;
            };
        };
    }>;
    close(): void;
}
export {};
