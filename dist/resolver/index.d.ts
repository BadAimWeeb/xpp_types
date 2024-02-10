import type ResolverDB from "../common/resolver-database.js";
import type { Express } from "express";
import Base from "./Base.js";
declare const _default: {
    [key: string]: new (resolverDB: ResolverDB, httpServer: Express) => Base<any, any, any>;
};
export default _default;
