
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReparacao } from '../../../models/reparacao';

@Injectable()
export class DetalhesreparacaoserviceService {
  private _reparacoesurl: string ="http://localhost:8000/reparacao/";
  constructor(private http: HttpClient) {  }

  getReparacao(reparacoes_id: any):Observable<any>{
    if (reparacoes_id) {
      return this.http.get<IReparacao>(this._reparacoesurl + 'detail/' + reparacoes_id )
    }
    else {
      return this.http.get<IReparacao>(this._reparacoesurl);
    }
  }

  getReparacoes(): Observable<IReparacao[]> {
    return this.http.get<IReparacao[]>(this._reparacoesurl);
  }
}
