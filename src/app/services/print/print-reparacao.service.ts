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
    console.log("LISTDATA",listData)
    if(listData.length > 0){
      console.log("LENGTH")     
      this.list = listData
    }
  }

  getList(): any {
    console.log("lista",this.list)
    if(this.list != null && this.list != undefined){ 
      return this.list ;
    }
    else{
      return null
    }
  }
}