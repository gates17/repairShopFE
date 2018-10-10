import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-reparacao-list',
  templateUrl: './reparacao-list.component.html',
  styleUrls: ['./reparacao-list.component.scss'],
  providers: [DetalhesreparacaoserviceService,EliminarreparacaoserviceService]
})

export class ReparacaoListComponent implements OnInit, OnDestroy {

  private get_request: any;
  private delete_request:any;
  reparacao: IReparacao;
  reparacaoSub: Subscription;
  public reparacoes = [];
 
  public pages=[];
  public page_links=[];
  public last_page: any;
  public previous_url:any;
  public next_url:any;
  public first_page: any;
  images: Array<string>;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService,
    private reparacaoEliminarService: EliminarreparacaoserviceService,
    private _http: HttpClient
  ) { 
  }
  
  ngOnInit() {
    this.get_request = this.reparacaoDetailhesService.getReparacoes('').subscribe(data =>{
      this.pages = data['pages_list']
      this.reparacoes = data['results']
      this.page_links= this.pages['page_links']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
      console.log(data)
    });
    
  }

  ngOnDestroy(){
     this.get_request.unsubscribe();
  }
  
  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  get_detail(id:number) {
    if (id) {
      this.router.navigate(['reparacao/details/' + id])
    } else {
      this.gotoList();
    }
  } 

  remove(id: number, i:number) {
    this.delete_request = this.reparacaoEliminarService.removerReparacao(id).subscribe(result => {
      this.reparacoes.splice(i, 1);
    }, error => console.error(error)); 

  }

  onPageChanged(url: string) {
    console.log(url)
    this.get_request = this.reparacaoDetailhesService.getReparacoes(url).subscribe(data =>{
      this.pages = data['pages_list']
      this.page_links= this.pages['page_links']
      this.reparacoes = data['results']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
  }
}

  

