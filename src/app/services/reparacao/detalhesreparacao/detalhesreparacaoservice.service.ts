
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReparacao } from '../../../models/reparacao';

@Injectable()
export class DetalhesreparacaoserviceService {
  private _reparacoesurl: string ="http://localhost:8000/reparacao/";
  constructor(private http: HttpClient) {  }

  getReparacao(reparacao_id: any):Observable<any>{
    if (reparacao_id) {
      return this.http.get<IReparacao>(this._reparacoesurl + 'detail/' + reparacao_id )
    }
    else {
      return this.http.get<IReparacao>(this._reparacoesurl);
    }
  }

  getReparacoes(): Observable<IReparacao[]> {
    return this.http.get<IReparacao[]>(this._reparacoesurl);
  }
  
  searchReparacoes(reparacoes_id): Observable<IReparacao[]> {
    if(reparacoes_id){
      console.log(reparacoes_id)
      return this.http.get<IReparacao[]>(this._reparacoesurl + '?q=' + reparacoes_id);
    }
    else
    {
      return this.http.get<IReparacao[]>(this._reparacoesurl);
    }
  }

}
