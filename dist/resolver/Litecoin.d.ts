import { ElectrumCluster, type TransportScheme } from "electrum-cash";
import { generateDBResolverCollection_Litecoin } from "../common/database.js";
import ResolverBase from "./Base.js";
export default class Litecoin extends ResolverBase<{
    /** Optional. Will use default hardcoded public servers if not specified (not recommended). */
    electrumClusterConnection?: {
        address: string;
        port?: number;
        protocol?: TransportScheme;
    }[];
    /**
     * Optional. If litecoind RPC endpoint is not specified, we'll fall back to slower electrum protocol
     * for transaction downloading (which is really not recommended).
     */
    rpc?: {
        endpoint: string;
        auth?: {
            username: string;
            password: string;
        } | {
            /** Used if RPC is behind a proxy and proxy is the one doing the authentication. */
            bearerToken: string;
        };
    };
    /**
     * How many block do we need to wait until marking a transaction as confirmed?
     * This prevents 51% attack from affecting us.
     */
    confirmationThreshold?: number;
    /** Used for vanity. */
    preMadeWIF?: string[];
}, {}, {
    account: string;
    ownedBy: string;
}> {
    type: string;
    type1: string;
    type2: string;
    name: string;
    codename: string;
    state: {
        confirmationThreshold: number;
    };
    db?: Awaited<ReturnType<typeof generateDBResolverCollection_Litecoin>>;
    electrum?: ElectrumCluster;
    private _waitBroadcast;
    readonly defaultDBValue: {};
    private _lastBlockHeight;
    private _lastBlockHash;
    init(): Promise<void>;
    private _lockRequery;
    private _handleRequeryAccount;
    private _handleDelayBroadcast;
    private _handleElectrumRetry;
    private _handleNotifications;
    private _handleTransaction;
    createNewAccount(ownedBy: string, _options?: {}): Promise<string>;
    getAccountOwner(address: string): Promise<string | undefined>;
    close(): Promise<void>;
}
