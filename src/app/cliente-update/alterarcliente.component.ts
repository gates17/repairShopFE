import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlterarService } from '../services/cliente/alterarservice/alterar.service';
import { ICliente } from '../models/cliente';

@Component({
  selector: 'app-alterarcliente',
  templateUrl: './alterarcliente.component.html',
  styleUrls: ['./alterarcliente.component.scss']
})
export class AlterarclienteComponent implements OnInit, OnDestroy {
 
  private request:any;
  cliente: ICliente;
  clienteSub: Subscription;
  clienteForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.maxLength(255) ]),
    tlf: new FormControl('',[ Validators.required, Validators.max(999999999), Validators.min(900000000) ]),
    address: new FormControl('',Validators.maxLength(1024)),
    zip_code:  new FormControl('', Validators.maxLength(15)),
    localidade:  new FormControl('', Validators.maxLength(15)),
    total_spent_by_client:  new FormControl('')
  })
  

  number_error = 'Insira um valor até 16 caracteres '
  number2_error = 'Insira um valor até 9 caracteres '
  name_error = 'É necessário inserir um nome' 
  textbox_error ='Insira uma descrição até um máximo de 1024 caracteres'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alterarClienteService: AlterarService
  ) { }

  ngOnInit() {
    this.clienteSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.request = this.alterarClienteService.getCliente(id).subscribe((cliente: ICliente) => {
          if (cliente) {
            this.cliente = cliente;
            this.cliente.url = cliente.url;

            this.clienteForm.controls.name.setValue(this.cliente.name);
            this.clienteForm.controls.tlf.setValue(this.cliente.tlf);
            this.clienteForm.controls.address.setValue(this.cliente.address);
            this.clienteForm.controls.zip_code.setValue(this.cliente.zip_code);
            this.clienteForm.controls.localidade.setValue(this.cliente.localidade);
            this.clienteForm.controls.total_spent_by_client.setValue(this.cliente.total_spent_by_client);
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(){
    this.clienteSub.unsubscribe();
    this.request.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/cliente']);
  }

  saveCliente() {
    this.alterarClienteService.updateCliente(this.clienteForm.value,this.cliente.id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}