declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    resolver: string;
}, {
    account: string;
    balance: number;
    utxo: {
        txid: string;
        vout: number;
        value: number;
    }[];
}[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
