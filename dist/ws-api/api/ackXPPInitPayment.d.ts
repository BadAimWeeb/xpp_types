declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    localID: string;
    appPaymentID?: string | null | undefined;
}, null, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
