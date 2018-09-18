import { Url } from "url";

export interface IReparacao {
    url: Url,
    id: number,
    name: string,
    description: string,
    date_created: string
    date_completed: string,
}