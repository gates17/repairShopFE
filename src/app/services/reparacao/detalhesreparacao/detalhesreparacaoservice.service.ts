
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

  getReparacoes(url: any): Observable<any[]> {
    if(url=='' || url==undefined){
      return this.http.get<any[]>(this._reparacoesurl);
    }
    else{
      return this.http.get<any[]>(url);

    }   
  }

  searchReparacoes(reparacoes_id, searchParam): Observable<IReparacao[]> {
    if(reparacoes_id){
      return this.http.get<IReparacao[]>(this._reparacoesurl + '?'+searchParam +'=' + reparacoes_id);
    }
    else
    {
      return this.http.get<IReparacao[]>(this._reparacoesurl);
    }
  }
  searchReparacoesDateBetween(dateStart, dateEnd,paramStart,paramEnd): Observable<IReparacao[]> {
      return this.http.get<IReparacao[]>(this._reparacoesurl + '?'+paramStart +'=' + dateStart+'&'+paramEnd+'='+dateEnd);
     }

}