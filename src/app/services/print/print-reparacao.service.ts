import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class PrintReparacaoService {
  // private list = new Subject<any>();
  private list = [];
  formData:any=null;
  constructor() { 
    this.formData=null
    this.list=null
  }

  setData(data){
    this.formData = data;
  }

  getData(){
    return this.formData;
  }

  setList(listData:any) {
    if(listData.length > 0){
      this.list = listData
    }
  }

  getList(): any {
    if(this.list != null && this.list != undefined){ 
      return this.list ;
    }
    else{
      return null
    }
  }
}