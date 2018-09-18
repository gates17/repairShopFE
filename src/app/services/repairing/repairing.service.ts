
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepairing } from '../../models/repairing';

@Injectable()//providedIn: 'root'})
export class RepairingService {


  private _repairingurl: string ="http://localhost:8000/repairing/";
  constructor(private http: HttpClient) {  }
 
  getRepairing(): Observable<IRepairing[]> {
    return this.http.get<IRepairing[]>(this._repairingurl);
  }

  getRepairingByID(id: number){
    return this.http.get(this._repairingurl+id.toString());
  }

  removeRepairing(id: number): Observable<IRepairing>{
    if(id){
      return this.http.delete<IRepairing>(this._repairingurl + 'delete/' + id +'/');
    }
    else{
      return this.http.get<IRepairing>(this._repairingurl);
    }
  }

  saveRepairing(repairing: any):Observable<any> {
    let result: Observable<Object>;
    if (repairing['url']){
     return this.http.put<IRepairing>(repairing['url'],repairing);
    }
    else {
     return this.http.post<IRepairing>(this._repairingurl,repairing);      
    }
  }
}