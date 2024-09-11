import { ElectrumCluster, TransportScheme } from "electrum-cash";
import { generateDBResolverCollection_Litecoin } from "../common/database.js";
import ResolverBase from "./Base.js";
export default class Litecoin extends ResolverBase<{
    clusterConnection?: {
        address: string;
        port?: number;
        protocol?: TransportScheme;
    }[];
}, {}, {}> {
    type: string;
    type1: string;
    type2: string;
    name: string;
    codename: string;
    state: {};
    knownTransactions: Set<string>;
    db?: Awaited<ReturnType<typeof generateDBResolverCollection_Litecoin>>;
    electrum?: ElectrumCluster;
    readonly defaultDBValue: {};
    init(): Promise<void>;
    createNewAccount(ownedBy: string): Promise<{
        address: string;
        wif: string;
    }>;
    close(): void;
}
