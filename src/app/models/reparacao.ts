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
    pagamento_parcial:number,
    discount:number,
    quantity:number,
    units:number,
    tax:number,
    tax_to_pay:number,
    total_to_pay:number,
    total_to_pay_with_tax:number
}