declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    appPaymentID: string;
    amount: number;
    resolver: string;
}, {
    [key: string]: any;
    message: string;
    timeout: number;
    localID: string;
    currency: string;
    account: string;
    amount: number;
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
