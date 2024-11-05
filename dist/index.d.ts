import "dotenv/config";
import "./preboot.js";
import "./scripts/databaseMigration.js";
import "./scripts/autoupdate.js";
import { type Session } from "@badaimweeb/js-protov2d";
import { type ServerContext } from "@badaimweeb/js-dtsocket";
import * as WSAPI from "./ws-api/index.js";
import type { GlobalState, LocalState, EventTable } from "./types.js";
declare const apiServer: import("@badaimweeb/js-dtsocket/dist/server.js").DTSocketServerInterface<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>, {
    cs: {} & {
        "internal:new-session": [import("@badaimweeb/js-dtsocket/dist/server_csocket.js").DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>, {
            cs: {} & {
                "internal:drop": [];
            };
            sc: {
                payment: [appID: string, xppID: string, status: "success" | "failed", output: any, reason?: string | undefined];
                xppInitPayment: [xppID: string, output: any];
            };
        }>];
        "internal:remove-session": [import("@badaimweeb/js-dtsocket/dist/server_csocket.js").DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>, {
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
export type Server = typeof apiServer;
export {};
