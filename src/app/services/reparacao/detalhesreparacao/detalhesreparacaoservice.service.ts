
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

  getReparacoesCliente(cliente_id: any, url:any): Observable<any[]>{
    if(!url && !(url.length > 0)){
      return this.http.get<any[]>(this._reparacoesurl  +'?'+'qc' +'=' + cliente_id);
    }
    else {
      return  this.http.get<any[]>(url);
    }
  }

  getAllReparacoesCliente(cliente_id: number): Observable<any[]>{
    return this.http.get<any[]>(this._reparacoesurl +'?'+'qc' +'=' + cliente_id + '&q=all')
  }

  
  getReparacoes(url: any): Observable<any[]> {
    if(url=='' || url==undefined){
      return this.http.get<any[]>(this._reparacoesurl);
    }
    else{
      return this.http.get<any[]>(url);

    }   
  }

  getSort(sortParam): Observable<any[]> {
    return this.http.get<any[]>(this._reparacoesurl + '?'+sortParam.active +'=' + sortParam.direction);
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