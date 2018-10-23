import { Url } from "url";

export interface IReparacao {
    url: Url,
    id: number,
    name_id: string,
    price: number,
    budget: number,
    description: string,
    date_created: string
    date_completed: string,
    weigth: number,
    foto: string,
    materials:string,
    faturado:boolean,
    pago:boolean,
}