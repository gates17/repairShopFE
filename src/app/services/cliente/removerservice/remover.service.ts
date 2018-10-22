import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from '../../../models/cliente';

@Injectable()
export class RemoverService {
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

  removerCliente(cliente_id: any):Observable<any> {
    if (cliente_id){
      return this.http.delete<ICliente[]>(this._clienteurl + 'delete/' + cliente_id +'/');
    }
    else {
      return this.http.get<ICliente>(this._clienteurl);
    }
  }
}