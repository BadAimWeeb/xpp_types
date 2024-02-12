type NestedRecord = [string, string | number | NestedRecord][];
export declare function serialize(obj: NestedRecord): string;
export declare function deserialize(data: string): NestedRecord;
export {};
