import type { ServerContext } from "@badaimweeb/js-dtsocket";
import type { Session } from "@badaimweeb/js-protov2d";
import type { GlobalState, LocalState, EventTable } from "../types";
import { DTSocketServerInterface } from "@badaimweeb/js-dtsocket/dist/server";
export declare function cleanClockAndRebroadcast(dtServer: DTSocketServerInterface<ServerContext<GlobalState, LocalState, EventTable, Session>>): () => void;
