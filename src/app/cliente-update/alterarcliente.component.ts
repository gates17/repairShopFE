import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
    name: new FormControl(''),
    tlf: new FormControl(''),
    address: new FormControl(''),
    zip_code:  new FormControl(''),
    localidade:  new FormControl(''),
    total_spent_by_client:  new FormControl('')
  })

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