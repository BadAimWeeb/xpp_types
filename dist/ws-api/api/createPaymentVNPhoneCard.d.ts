declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    appPaymentID: string;
    amount: number;
    code: string;
    resolver: string;
    telco: string;
    serial: string;
}, {
    status: string;
    reason: string;
    localID: string;
    wouldBeAmount: number;
    actualAmount: number;
    output?: undefined;
} | {
    status: string;
    output: {
        id: string;
        amount: number;
        originalValue: number;
        currency: string;
        date: Date;
        message: string;
        penalty: boolean;
    };
    localID: string;
    wouldBeAmount: number;
    actualAmount: number;
    reason?: undefined;
} | {
    status: string;
    localID: string;
    reason?: undefined;
    wouldBeAmount?: undefined;
    actualAmount?: undefined;
    output?: undefined;
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
