import ResolverBase from "./Base.js";
export default class Litecoin extends ResolverBase<{}, {}, {}> {
    type: string;
    type1: string;
    type2: string;
    name: string;
    codename: string;
    state: {};
    knownTransactions: Set<string>;
    readonly defaultDBValue: {};
    init(): Promise<void>;
    createNewAccount(): Promise<void>;
    close(): void;
}
