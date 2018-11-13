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

  private client_request: any;
  clientOptions: any;
  reparacao: string;
  reparacaoSub: Subscription;
  reparacaoForm = new FormGroup({
    name_id: new FormControl('',Validators.required),
    description: new FormControl('',Validators.maxLength(1024)),
    price: new FormControl('',Validators.max(9999999999.99)),
    budget: new FormControl('',[Validators.required, Validators.max(9999999999.99)]),
    date_completed: new FormControl(null),
    weigth: new FormControl('',Validators.max(9999999999.99)),
    foto: new FormControl(''),
    materials: new FormControl(''),
    faturado: new FormControl(false),
    pago: new FormControl(false),
    pagamento_parcial: new FormControl('',Validators.max(9999999999.99)),
    

  })
 
  // private subresponse:any;

  validation_messages = {
    'name_id': [
      { type: 'required', message: 'É necessário escolher um cliente' }
    ],
    'budget': [
      { type: 'size', message: 'Insira um valor entre 0 e 9 999 999 999.99 '},
      { type: 'required', message: 'É necessário inserir um valor'  }
    ],
    'weigth': [
      { type: 'size', message: 'Insira um valor entre 0 e 9 999 999 999.99 '},
    ],
    'pagamento_parcial': [
      { type: 'size', message: 'Insira um valor entre 0 e 9 999 999 999.99 '},
    ],
    'price': [
      { type: 'size', message: 'Insira um valor entre 0 e 9 999 999 999.99 '},
    ],
    'description': [
      { type: 'size', message: 'Insira uma descrição até um máximo de 1024 caracteres'},
    ],
    }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoCreateService: CriarreparacaoserviceService,
    private getClientesService: ConsultarService,
    private datePipe: DatePipe,
  ) {
   }

  ngOnInit() {
    this.client_request = this.getClientesService.getClientes('').subscribe(data =>{
      this.clientOptions = data['results']
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
    this.reparacaoCreateService.guardarReparacao(this.reparacaoForm).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  ngOnDestroy(){
    //this.subresponse.unsubscribe()  
  }

 
}