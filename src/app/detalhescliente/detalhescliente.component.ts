import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';
import { RemoverService } from '../services/cliente/removerservice/remover.service';
import { ICliente } from '../models/cliente';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhescliente',
  templateUrl: './detalhescliente.component.html',
  styleUrls: ['./detalhescliente.component.scss']
})
export class DetalhesclienteComponent implements OnInit {

  cliente: ICliente;
  clienteSub: Subscription;
  public clientes = [];
  images: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteDetailhesService: ConsultarService,
    private clienteEliminarService: RemoverService,
    private _http: HttpClient
    
  ) { }

  ngOnInit() {
  
    this.clienteDetailhesService.getClientes().subscribe(data => this.clientes = data);
    console.log(this.clienteDetailhesService.getClientes())

    this.clienteSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.clienteDetailhesService.getCliente(id).subscribe((cliente: ICliente) => {
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


  remove(id: number, i:number) {
    this.clienteEliminarService.removerCliente(id).subscribe(result => {
      this.clientes.splice(i, 1);
      console.log(this.clientes)


    }, error => console.error(error));
  }


  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];


  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    this.personList[id][property] = this.editField;
  }

}