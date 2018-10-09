import { Injectable } from '@angular/core';

@Injectable()
export class PrintReparacaoService {

  formData:any=null;
  constructor() { 
    this.formData=null
  }

  setData(data){
    this.formData= data;
  }

  getData(){
    return this.formData;
  }

}
