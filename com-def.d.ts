import * as _badaimweeb_js_dtsocket_dist_server_js from '@badaimweeb/js-dtsocket/dist/server.js';
import * as _badaimweeb_js_dtsocket_dist_server_csocket_js from '@badaimweeb/js-dtsocket/dist/server_csocket.js';
import * as _badaimweeb_js_protov2d from '@badaimweeb/js-protov2d';
import { Session } from '@badaimweeb/js-protov2d';
import * as _badaimweeb_js_dtsocket from '@badaimweeb/js-dtsocket';
import { ServerContext } from '@badaimweeb/js-dtsocket';
import * as http from 'http';
import * as ws from 'ws';
import * as mongodb from 'mongodb';

type GlobalState = {};
type LocalState = {
    uuid: string;
    secret: string;
};
type EventTable = {
    csEvents: {};
    scEvents: {
        payment: (appID: string, xppID: string, status: "success" | "failed", output: any, reason?: string) => void;
        xppInitPayment: (xppID: string, output: any) => void;
    };
};

declare const func$c: _badaimweeb_js_dtsocket.Procedure<{
    localID: string;
} | {
    appPaymentID: string;
}, mongodb.WithId<{
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
}>, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$b: _badaimweeb_js_dtsocket.Procedure<{
    localID: string;
    appPaymentID?: string | null | undefined;
}, null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$a: _badaimweeb_js_dtsocket.Procedure<{
    localID: string;
} | {
    appPaymentID: string;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$9: _badaimweeb_js_dtsocket.Procedure<{
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
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$8: _badaimweeb_js_dtsocket.Procedure<{
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
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$7: _badaimweeb_js_dtsocket.Procedure<{
    resolver: string;
    options?: any;
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$6: _badaimweeb_js_dtsocket.Procedure<{
    resolver: string;
}, {
    account: string;
    balance: number;
    utxo: {
        txid: string;
        vout: number;
        value: number;
    }[];
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$5: _badaimweeb_js_dtsocket.Procedure<void, {
    uuid: string;
    type0: string;
    type1: string;
    type2: string;
    subtype: string[];
    name: string;
    codename: string;
    state: Record<string, any>;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$4: _badaimweeb_js_dtsocket.Procedure<{
    resolver: string;
    identifier: string;
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$3: _badaimweeb_js_dtsocket.Procedure<{
    resolver: string;
    account: string;
    bin: string;
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$2: _badaimweeb_js_dtsocket.Procedure<{
    resolver: string;
}, {
    [telco: string]: {
        [value: string]: {
            fees: number;
            penalty: number;
        };
    };
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1: _badaimweeb_js_dtsocket.Procedure<{
    uuid: string;
    secret: string;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func: _badaimweeb_js_dtsocket.Procedure<{
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
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare namespace WSAPI {
  export { func$c as ackPayment, func$b as ackXPPInitPayment, func$a as cancelPayment, func$9 as createPaymentBank, func$8 as createPaymentVNPhoneCard, func$7 as createXPPInitTXAccount, func$6 as getBalanceCryptoBTCFamily, func$5 as getResolvers, func$4 as getTSRAccountName, func$3 as getVNBankAccountName, func$2 as getVNPhoneCardFee, func$1 as inputKey, func as transferCryptoBTCFamily };
}

declare const apiServer: _badaimweeb_js_dtsocket_dist_server_js.DTSocketServerInterface<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>, {
    cs: {} & {
        "internal:new-session": [_badaimweeb_js_dtsocket_dist_server_csocket_js.DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>, {
            cs: {} & {
                "internal:drop": [];
            };
            sc: {
                payment: [appID: string, xppID: string, status: "success" | "failed", output: any, reason?: string | undefined];
                xppInitPayment: [xppID: string, output: any];
            };
        }>];
        "internal:remove-session": [_badaimweeb_js_dtsocket_dist_server_csocket_js.DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>, {
            cs: {} & {
                "internal:drop": [];
            };
            sc: {
                payment: [appID: string, xppID: string, status: "success" | "failed", output: any, reason?: string | undefined];
                xppInitPayment: [xppID: string, output: any];
            };
        }>];
    };
    sc: {
        payment: [appID: string, xppID: string, status: "success" | "failed", output: any, reason?: string | undefined];
        xppInitPayment: [xppID: string, output: any];
    };
}>;
type Server = typeof apiServer;

export type { Server };
