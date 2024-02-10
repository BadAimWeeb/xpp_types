import fetchX from "node-fetch";
import type { CookieJar } from "tough-cookie";
export declare function fetch(url: string, option: Parameters<typeof fetchX>[1] & {
    jar?: CookieJar;
}): Promise<import("node-fetch").Response>;
