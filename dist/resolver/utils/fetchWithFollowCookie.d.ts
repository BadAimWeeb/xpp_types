import { fetch } from "./fetchWithJar.js";
import { CookieJar } from "tough-cookie";
export declare function fetchWithFollowCookie(url: string, option?: Parameters<typeof fetch>[1] & {
    jar?: CookieJar;
}): Promise<import("node-fetch").Response>;
