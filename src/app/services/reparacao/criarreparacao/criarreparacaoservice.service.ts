import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IReparacao } from '../../../models/reparacao';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CriarreparacaoserviceService {
  private _reparacaourl: string ="http://localhost:8000/reparacao/";
  constructor(private http: HttpClient) {  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  guardarReparacao(reparacoes: any):Observable<any> {
    console.log(reparacoes['url'])
    console.log(reparacoes.value)

    if (reparacoes['url']){
      return this.http.get<IReparacao>(this._reparacaourl);
    }
    else {
      return this.http.post<IReparacao>(this._reparacaourl + 'create/',reparacoes.value)

    }

  }
}

        /*.pipe(
          catchError(
            this.handleError('guardarReparacao', reparacaoes)
            )
        );   */   