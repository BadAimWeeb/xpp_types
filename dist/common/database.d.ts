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
/** XPP-initialized payments that does not have appPaymentID yet. */
export declare const DBXPPInitPayments: Collection<{
    localID: string;
    appUUID: string;
    fullMessage: string;
    resolverID: string;
    resolverType: string;
    amount: number;
    input: any;
    instruction: any;
    output: any;
    createdAt: number;
    updatedAt: number;
}>;
