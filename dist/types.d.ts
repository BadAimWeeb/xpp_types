export type GlobalState = {};
export type LocalState = {
    uuid: string;
    secret: string;
};
export type EventTable = {
    csEvents: {};
    scEvents: {
        payment: (appID: string, xppID: string, status: "success" | "failed", output: any, reason?: string) => void;
    };
};
export declare enum ErrorCode {
    NOT_IMPLEMENTED = "XPP#-1",
    UNKNOWN_ERROR = "XPP#0",
    INVALID_CREDENTIALS = "XPP#1",
    INSUFFICIENT_PERMISSION = "XPP#2",
    NOT_FOUND = "XPP#3",
    INVALID_STATE = "XPP#4"
}
