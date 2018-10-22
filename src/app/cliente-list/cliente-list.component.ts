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

  public pages=[];
  public page_links=[];
  public last_page: any;
  public previous_url:any;
  public next_url:any;
  public first_page: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteDetailhesService: ConsultarService,
    private clienteEliminarService: RemoverService,
    private _http: HttpClient
    
  ) { }



  onPageChanged(url: string) {
    this.get_request = this.clienteDetailhesService.getClientes(url).subscribe(data =>{
      this.pages = data['pages_list']
      this.page_links= this.pages['page_links']
      this.clientes = data['results']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
  }
  
  ngOnInit() {
    this.get_request = this.clienteDetailhesService.getClientes('').subscribe(data =>{
      this.pages = data['pages_list']
      this.clientes = data['results']
      this.page_links= this.pages['page_links']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
    
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