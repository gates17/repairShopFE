import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from '../../../models/cliente';

@Injectable()
export class CriarService {
  private _clienteurl: string ="http://localhost:8000/cliente/";
  constructor(private http: HttpClient) {  }


  guardarCliente(clientes: any):Observable<any> {
    let result: Observable<Object>;
    console.log(clientes)

    if (clientes['url']){
      return this.http.get<ICliente>(this._clienteurl);
    }
    else {
      return this.http.post<ICliente>(this._clienteurl + 'create/',clientes.value);      
    }

  }
}