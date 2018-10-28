import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from '../../../models/cliente';

@Injectable()
export class ConsultarService {
  private _clientesurl: string ="http://localhost:8000/cliente/";
  constructor(private http: HttpClient) {  }

  getCliente(clientes_id: any):Observable<any>{
    if (clientes_id) {
      return this.http.get<ICliente>(this._clientesurl + 'detail/' + clientes_id )
    }
    else {
      return this.http.get<ICliente>(this._clientesurl);
    }
  }


  getClientes(url:any): Observable<ICliente[]> {
    console.log(url)
    if(!url){
      return this.http.get<ICliente[]>(this._clientesurl);
    }
    else{
      return this.http.get<ICliente[]>(url);

    }   
  }
}
