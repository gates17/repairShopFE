import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReparacao } from '../../models/reparacao';

@Injectable()
export class EliminarreparacaoserviceService {
  private _reparacaourl: string ="http://localhost:8000/reparacao/";
  constructor(private http: HttpClient) {  }

  getReparacao(reparacao_id: any):Observable<any>{
    console.log(reparacao_id)
    if (reparacao_id) {
      return this.http.get<IReparacao>(this._reparacaourl + 'detail/' + reparacao_id )
    }
    else {
      return this.http.get<IReparacao>(this._reparacaourl);
    }
  }

  removerReparacao(reparacao_id: any):Observable<any> {
    if (reparacao_id){
      return this.http.delete<IReparacao[]>(this._reparacaourl + 'delete/' + reparacao_id +'/');
    }
    else {
      return this.http.get<IReparacao>(this._reparacaourl);
    }
  }
}