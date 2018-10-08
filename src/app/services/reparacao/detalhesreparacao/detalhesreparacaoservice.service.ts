
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReparacao } from '../../../models/reparacao';

import { Page, queryPaginated} from '../../../pagination/pagination.component';
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
/*
  list(urlOrFilter?: string | object): Observable<Page<IReparacao>> {
    console.log(queryPaginated<any>(this.http, this._reparacoesurl, urlOrFilter))
    return queryPaginated<any>(this.http, this._reparacoesurl, urlOrFilter);

  }
  */
  getReparacoes(url: any): Observable<any[]> {
    if(url=='' || url==undefined){
      console.log( this.http.get<any[]>(this._reparacoesurl))
      return this.http.get<any[]>(this._reparacoesurl);
    }
    else{
      return this.http.get<any[]>(url);

    }
   
    
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
