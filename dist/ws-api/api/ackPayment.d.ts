/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    localID: string;
} | {
    appPaymentID: string;
}, import("mongodb").WithId<{
    localID: string;
    appUUID: string;
    appPaymentID: string;
    fullMessage: string;
    resolverID: string;
    resolverType: string;
    amount: number;
    status: "success" | "failed" | "pending";
    reason?: string | undefined;
    input: any;
    instruction: any;
    output: any;
    returned: boolean;
    createdAt: number;
    updatedAt: number;
    expiresAt: number;
}>, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
