import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { apiUrl } from "../app/(dashboard)/admin/layout";

export async function api<T = unknown>(route:string, init:RequestInit): Promise< 
    | {data: T, status: number, error: undefined}
    | {data: undefined, status: undefined, error: string}
> {
    try {
        const response = await fetch(`${apiUrl}/${route}`, init).then(async res => {
            if(!res.ok) {
                const error = await res.json().then(res=>res.error)
                throw new Error(error)
            }
            else return res
        }) as Response
        const data = await response.json() as T;
        const status = await response.status

        return {data, status, error: undefined}
    } catch(e) {
        return {data: undefined, status: 400, error: e.message}
    }
}