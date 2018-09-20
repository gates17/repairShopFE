import { Component, OnInit } from '@angular/core';
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
export class AlterarclienteComponent implements OnInit {
 
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
        this.alterarClienteService.getCliente(id).subscribe((cliente: ICliente) => {
          if (cliente) {
            this.cliente = cliente;
            this.cliente.url = cliente.url;
          } else {
            this.gotoList();
          }
        });
      }
    });
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