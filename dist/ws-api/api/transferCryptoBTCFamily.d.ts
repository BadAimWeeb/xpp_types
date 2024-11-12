declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    output: {
        address: string;
        amount: number;
        subtractEnabled?: boolean | null | undefined;
    }[];
    resolver: string;
    dumpTo: string;
    options?: {
        input?: {
            txid: string;
            vout: number;
        } | null | undefined;
        fee?: number | "lowest" | null | undefined;
    } | null | undefined;
}, {
    txid: string;
    fee: number;
    output: {
        address: string;
        amount: number;
    }[];
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../types.js").GlobalState, import("../../types.js").LocalState, import("../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
