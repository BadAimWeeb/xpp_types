import { Collection, WithId } from "mongodb";
export type DatabaseReturnType<T extends Collection<any>> = T extends Collection<infer U> ? WithId<U> : never;
export declare const DBApplications: Collection<{
    uuid: string;
    secret: string;
    shortName: string;
    allowedResolvers: string[];
}>;
export declare const DBResolverData: Collection<{
    uuid: string;
    data: any;
    disabled: boolean;
    type: string;
}>;
export declare const DBCaptchaResolverData: Collection<{
    uuid: string;
    data: any;
    disabled: boolean;
    type: string;
}>;
export declare const DBPayments: Collection<{
    localID: string;
    appUUID: string;
    appPaymentID: string;
    fullMessage: string;
    resolverID: string;
    resolverType: string;
    amount: number;
    currency: string;
    status: "pending" | "success" | "failed";
    reason?: string;
    input: any;
    instruction: any;
    output: any;
    returned: boolean;
    createdAt: number;
    updatedAt: number;
    expiresAt: number;
}>;
/**
 * XPP-initialized payments that does not have appPaymentID yet.
 * If appPaymentID is supplied afterwards, it must be converted to normal payment.
 * (essentially, this is a temporary storage for XPP-initiated payments)
 *
 * All payments here are considered "success", unless app reject them, in that case we delete.
 */
export declare const DBXPPInitPayments: Collection<{
    localID: string;
    appUUID: string;
    fullMessage: string;
    resolverID: string;
    resolverType: string;
    amount: number;
    currency: string;
    input: {
        account: string;
    };
    output: any;
    createdAt: number;
    updatedAt: number;
}>;
export declare const mapDBResolverCollection: Map<string, Collection<any>>;
export declare const generateDBResolverCollection_Litecoin: (uuid: string) => Promise<Collection<{
    ownedBy: string;
    privateKey: string;
    /** Output script, NOT redeem script. */
    script: string;
    address: string;
    lastChecked: number;
    /** Balance is always in "sat" */
    lastCheckedBalance: number;
    lastCheckedUnspent: {
        /** TXID on blockchain */
        t: string;
        /** Vout index */
        n: number;
        /** Value of output, in "sat" */
        v: number;
        /** Block height */
        bn?: number;
    }[];
} & ({
    type: "p2pkh";
} | {
    type: "p2sh-p2wpkh";
} | {
    type: "p2wpkh";
})>>;
