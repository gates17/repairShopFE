import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from '../../../models/cliente';

@Injectable()
export class AlterarService {
  private _clienteurl: string ="http://localhost:8000/cliente/";
  constructor(private http: HttpClient) {  }

  getCliente(cliente_id: any):Observable<any>{
    if (cliente_id) {
      return this.http.get<ICliente>(this._clienteurl + 'detail/' + cliente_id )
    }
    else {
      return this.http.get<ICliente>(this._clienteurl);
    }
  }

  updateCliente(clientes: any, id:number):Observable<any> {
    console.log(clientes)
    if (clientes){
          return this.http.put(this._clienteurl + 'update/' + id + '/',clientes)
    }
    else {  
      return this.http.get<ICliente[]>(this._clienteurl);
    }
  }
}