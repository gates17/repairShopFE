import { Url } from "url";

export interface ICliente {
    url: Url,
    id: number,
    name: string,
    date_created: string
    tlf: string,
    address: string,
    zip_code: string,
    localidade: string,
    total_spent_by_client: number
}