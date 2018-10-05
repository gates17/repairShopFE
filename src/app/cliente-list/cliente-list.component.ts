import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';
import { RemoverService } from '../services/cliente/removerservice/remover.service';
import { ICliente } from '../models/cliente';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit, OnDestroy {

  cliente: ICliente;
  private get_request:any;
  private delete_request:any;
  clienteSub: Subscription;
  public clientes = [];
  images: Array<string>;
  id:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteDetailhesService: ConsultarService,
    private clienteEliminarService: RemoverService,
    private _http: HttpClient
    
  ) { }

  ngOnInit() {
     
    this.get_request = this.clienteDetailhesService.getClientes().subscribe(data => {
      this.clientes = data
      console.log(data)
    });

/*    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      
      if (this.id) {
        console.log(this.id)
        this.request = this.clienteDetailhesService.getCliente(this.id).subscribe((cliente: ICliente) => {
          if (cliente) {
            this.cliente = cliente;
            this.cliente.url = cliente.url;
          } else {
            this.gotoList();
          }
        });
      }
    });*/
  }

  ngOnDestroy() {
    this.get_request.unsubscribe();
    //  this.delete_request.unsubscribe()
    
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

  get_detail(id:number) {
    if (id) {
          this.router.navigate(['cliente/details/' + id])
        } else {
          this.gotoList();
        }

  } 

}