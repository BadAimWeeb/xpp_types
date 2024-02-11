import type { DTSocketServer, ServerContext } from "@badaimweeb/js-dtsocket";
import type { Session } from "@badaimweeb/js-protov2d";
import type { GlobalState, LocalState, EventTable } from "../types";
export declare function cleanClockAndRebroadcast(dtServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session>>): () => void;
