import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';
import { RemoverService } from '../services/cliente/removerservice/remover.service';
import { ICliente } from '../models/cliente';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-detalhescliente',
  templateUrl: './detalhescliente.component.html',
  styleUrls: ['./detalhescliente.component.scss']
})
export class DetalhesclienteComponent implements OnInit, OnDestroy {

  cliente: ICliente;
  private request:any;
  clienteSub: Subscription;
  public clientes = [];
  images: Array<string>;
  id: any;

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
    private clienteDetailhesService: ConsultarService,
    private clienteEliminarService: RemoverService,
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
            this.cliente.tlf = cliente.tlf;
            this.cliente.total_spent_by_client = cliente.total_spent_by_client;
            this.cliente.address = cliente.address;
            this.cliente.zip_code = cliente.zip_code;
            this.cliente.localidade = cliente.localidade;
            this.cliente.name = cliente.name;

          } else {
            this.gotoList();
          }
        });
      }
    });
    
  }

  ngOnDestroy() {
    this.request.unsubscribe();
    this.clienteSub.unsubscribe();
    
  }
  
  gotoList() {
    this.router.navigate(['/cliente']);
  }

  remove(id: number) {
    this.clienteEliminarService.removerCliente(id).subscribe(result => {
      console.log(this.clientes)


    }, error => console.error(error));
  }

  print(){
  }
  

}
