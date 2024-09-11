import TypedEmitter from "typed-emitter";
declare const CaptchaResolverDB_base: new <T_1>() => TypedEmitter<{
    data: (data: T_1) => void;
}>;
export default class CaptchaResolverDB<T = any> extends CaptchaResolverDB_base<T> {
    #private;
    readonly resolverID: string;
    type: string;
    readonly defaultData: T;
    currentData: T | null;
    checking: boolean;
    disabled: boolean;
    constructor(resolverID: string, type: string, defaultData: T);
    init(): Promise<T>;
    update(data: T): Promise<void>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    destroy(): void;
}
export {};
