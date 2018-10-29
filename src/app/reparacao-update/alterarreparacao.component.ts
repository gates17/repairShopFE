import { Component, OnInit, OnDestroy , ViewChild} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap  } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlterarreparacaoserviceService } from '../services/reparacao/alterarreparacao/alterarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import { DatePipe } from '@angular/common';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-alterarreparacao',
  templateUrl: './alterarreparacao.component.html',
  styleUrls: ['./alterarreparacao.component.scss']
})

export class AlterarreparacaoComponent implements OnInit, OnDestroy {

  date: any;
  reparacao:  IReparacao;
  reparacaoSub: Subscription;
  private request: any;
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
    pago: new FormControl(false)

  })
  private client_request: any;
  clientOptions: any;
  defaultId:any;
  optionsSelect: Array<any> =[];


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
    'price': [
      { type: 'size', message: 'Insira um valor entre 0 e 9 999 999 999.99 '},
    ],
    'description': [
      { type: 'size', message: 'Insira uma descrição até um máximo de 1024 caracteres'},
    ],
  }
  number_error = 'Insira um valor entre 0 e 9 999 999 999.99 '
  name_error = 'É necessário escolher um cliente' 
  textbox_error ='Insira uma descrição até um máximo de 1024 caracteres'

  constructor(
    
    private route: ActivatedRoute,
    private router: Router,
    private alterarReparacaoService: AlterarreparacaoserviceService,
    private datePipe: DatePipe,
    private getClientesService: ConsultarService,
  ) { }


  ngOnInit() {
   

    this.reparacaoSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.request = this.alterarReparacaoService.getReparacao(id).subscribe((reparacao: IReparacao) => {
          if (reparacao) {
            this.reparacao = reparacao;
            this.reparacao.url = reparacao.url;
            // this.reparacaoForm.hasError
            //this.reparacaoForm.
            this.reparacaoForm.controls.name_id.setValue(this.reparacao.name_id);
            this.reparacaoForm.controls.description.setValue(this.reparacao.description);
            this.reparacaoForm.controls.date_completed.setValue(this.reparacao.date_completed);
            this.reparacaoForm.controls.price.setValue(this.reparacao.price);
            this.reparacaoForm.controls.budget.setValue(this.reparacao.budget);
            this.reparacaoForm.controls.weigth.setValue(this.reparacao.weigth);
            this.reparacaoForm.controls.foto.setValue(this.reparacao.foto);
            this.reparacaoForm.controls.materials.setValue(this.reparacao.materials);
            this.reparacaoForm.controls.faturado.setValue(this.reparacao.faturado);
            this.reparacaoForm.controls.pago.setValue(this.reparacao.pago);

            this.client_request = this.getClientesService.getClientes('').subscribe(data =>{
              this.clientOptions = data['results']
             
              this.clientOptions.forEach(o => {
                this.optionsSelect.push({value: o.id, label:o.name});
                if(o.name == this.reparacao.name_id)
                  this.defaultId = o.id;                
              });
            });


          } else {
            this.gotoList();
          }
        });
      }
    });
  
  }

  ngOnDestroy() {
    this.reparacaoSub.unsubscribe();
    this.request.unsubscribe();

  }
  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  saveReparacao() {
    if (this.reparacaoForm.controls.date_completed.value != null){
      let date = this.reparacaoForm.controls.date_completed.value
      let dateParser = new Date(date.year, date.month-1, date.day);
      let date_completed = this.datePipe.transform(dateParser ,"yyyy-MM-dd")
      this.reparacaoForm.controls.date_completed.setValue(date_completed.toString())
    }
    this.alterarReparacaoService.updateReparacao(this.reparacaoForm.value,this.reparacao.id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}