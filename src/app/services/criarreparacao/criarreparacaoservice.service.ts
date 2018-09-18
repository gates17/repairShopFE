import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReparacao } from '../../models/reparacao';

@Injectable()
export class CriarreparacaoserviceService {
  private _reparacaourl: string ="http://localhost:8000/reparacao/";
  constructor(private http: HttpClient) {  }


  guardarReparacao(reparacoes: any):Observable<any> {
    let result: Observable<Object>;
    console.log(reparacoes)

    if (reparacoes['url']){
      return this.http.get<IReparacao>(this._reparacaourl);
    }
    else {
      return this.http.post<IReparacao>(this._reparacaourl + 'create/',reparacoes.value);      
    }

  }
}