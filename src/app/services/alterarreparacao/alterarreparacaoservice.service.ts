import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReparacao } from '../../models/reparacao';

@Injectable()
export class AlterarreparacaoserviceService {
  private _reparacaourl: string ="http://localhost:8000/reparacao/";
  constructor(private http: HttpClient) {  }

  getReparacao(reparacao_id: any):Observable<any>{
    if (reparacao_id) {
      return this.http.get<IReparacao>(this._reparacaourl + 'detail/' + reparacao_id )
    }
    else {
      return this.http.get<IReparacao>(this._reparacaourl);
    }
  }

  updateReparacao(reparacoes: any, id:number):Observable<any> {
    console.log(reparacoes)
    if (reparacoes){
      console.log("pilas")
      console.log(id, reparacoes)
      //return this.http.put(reparacoes['url'] + 'update/' + reparacoes['id'] + '/',reparacoes)
      return this.http.put(this._reparacaourl + 'update/' + id + '/',reparacoes)
    }
    else {  
      return this.http.get<IReparacao[]>(this._reparacaourl);
    }
  }
}