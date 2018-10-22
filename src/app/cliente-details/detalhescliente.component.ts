import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';
import { RemoverService } from '../services/cliente/removerservice/remover.service';
import { ICliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component'
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';


@Component({
  selector: 'app-detalhescliente',
  templateUrl: './detalhescliente.component.html',
  styleUrls: ['./detalhescliente.component.scss']
})
export class DetalhesclienteComponent implements OnInit, OnDestroy {

  @Output() messageEvent = new EventEmitter<any>();
 
  
  cliente: ICliente;
  private request:any;
  clienteSub: Subscription;
  images: Array<string>;
  id: any;
  convert: HtmlToPdfComponent;
  reparacoes: any [];
  clienteForm = new FormGroup({
    name: new FormControl(''),
    tlf: new FormControl(''),
    address: new FormControl(''),
    zip_code:  new FormControl(''),
    localidade:  new FormControl(''),
    total_spent_by_client:  new FormControl(''),

    date_created:  new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteDetailhesService: ConsultarService,
    private clienteEliminarService: RemoverService,
    private reparacoesClienteService: DetalhesreparacaoserviceService,
    private _http: HttpClient
    
  ) { }

  ngOnInit() {
    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      
      if (this.id) {
        this.request = this.clienteDetailhesService.getCliente(this.id).subscribe((cliente: ICliente) => {
          if (cliente) {
            this.cliente = cliente;
            this.cliente.url = cliente.url;
            this.clienteForm.controls.tlf.setValue(cliente.tlf);
            this.clienteForm.controls.address.setValue(cliente.address);
            this.clienteForm.controls.zip_code.setValue(cliente.zip_code);
            this.clienteForm.controls.localidade.setValue(cliente.localidade);
            this.clienteForm.controls.name.setValue(cliente.name);
            this.clienteForm.controls.date_created.setValue(cliente.date_created);

          } else {
            this.gotoList();
          }
        });
      }
    });
    
  }

  ngOnDestroy() {
    this.clienteSub.unsubscribe();
    
  }
  
  gotoList() {
    this.router.navigate(['/cliente']);
  }

  remove(id: number) {
    this.clienteEliminarService.removerCliente(id).subscribe(result => {


    }, error => console.error(error));
  }

  print(){
   // this.clientData= this.cliente;
    this.clienteForm.controls.tlf.setValue(this.cliente.tlf);
    this.clienteForm.controls.address.setValue(this.cliente.address);
    this.clienteForm.controls.zip_code.setValue(this.cliente.zip_code);
    this.clienteForm.controls.localidade.setValue(this.cliente.localidade);
    this.clienteForm.controls.name.setValue(this.cliente.name);
    this.clienteForm.controls.date_created.setValue(this.cliente.date_created);

    this.messageEvent.emit({
      form:this.clienteForm.controls.value, 
      cliente: this.cliente, 
      value: this.clienteForm.value
    });
    this.router.navigate(['/cliente/print']);
  
  }
  
  get_conta_corrente(){
    this.router.navigate(['/cliente/details/'+ this.cliente.id +'/conta/'])
  }

}
