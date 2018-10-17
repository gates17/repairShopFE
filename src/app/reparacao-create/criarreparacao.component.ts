import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CriarreparacaoserviceService } from '../services/reparacao/criarreparacao/criarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import { DatePipe } from '@angular/common';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';


@Component({
  selector: 'app-criarreparacao',
  templateUrl: './criarreparacao.component.html',
  styleUrls: ['./criarreparacao.component.scss']
})
export class CriarreparacaoComponent implements OnInit, OnDestroy {

  reparacao: string;
  reparacaoSub: Subscription;
  reparacaoForm = new FormGroup({
    name: new FormControl('',Validators.required),
    description: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl('',Validators.required),
    date_completed: new FormControl(null),
    weight: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl(''),
    faturado: new FormControl(false)
  })
  private client_request: any;
  clientOptions: any;
 
  private subresponse:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoCreateService: CriarreparacaoserviceService,
    private getClientesService: ConsultarService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.client_request = this.getClientesService.getClientes('').subscribe(data =>{
      this.clientOptions = data['results']
      console.log(data)
      console.log(this.clientOptions)
    });
  }

  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  createReparacao() {
    if (this.reparacaoForm.controls.date_completed.value != null){
      let date = this.reparacaoForm.controls.date_completed.value
      let dateParser = new Date(date.year, date.month-1, date.day);
      let date_completed = this.datePipe.transform(dateParser ,"yyyy-MM-dd")
      this.reparacaoForm.controls.date_completed.setValue(date_completed.toString())
    }
  // this.subresponse =
    this.reparacaoCreateService.guardarReparacao(this.reparacaoForm).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  ngOnDestroy(){
    //this.subresponse.unsubscribe()  
  }
}