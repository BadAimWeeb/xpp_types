interface NestedRecord {
    [key: string]: string | number | NestedRecord;
}
export declare function serialize(obj: NestedRecord): string;
export {};
