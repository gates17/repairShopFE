import { Url } from "url";

export interface IReparacao {
    url: Url,
    id: number,
    name: string,
    price: number,
    budget: number,
    description: string,
    date_created: string
    date_completed: string,
    weight: number,
    foto: string,
    materials:string,
    faturado:boolean,
}