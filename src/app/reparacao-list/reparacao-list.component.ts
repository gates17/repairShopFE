import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { PrintReparacaoService } from '../services/print/print-reparacao.service';

import { IReparacao } from '../models/reparacao';

import { HttpClient } from '@angular/common/http';

import { Sort } from '@angular/material';


import { Subject } from 'rxjs';
@Component({
  selector: 'app-reparacao-list',
  templateUrl: './reparacao-list.component.html',
  styleUrls: ['./reparacao-list.component.scss'],
  providers: [DetalhesreparacaoserviceService,EliminarreparacaoserviceService]
})

export class ReparacaoListComponent implements OnInit, OnDestroy {

  private _reparacoesurl: string ="http://localhost:8000/reparacao/";
  private teste:any;

  private get_request: any;
  private delete_request:any;
  private list_to_print:any =[];
  reparacao: IReparacao;
  reparacaoSub: Subscription;
 
  public selected = false; 
  public pages=[];
  public page_links=[];
  public last_page: any;
  public previous_url:any;
  public next_url:any;
  public first_page: any;
  images: Array<string>;
 
  public reparacoes = [];

  sortedData: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService,
    private reparacaoEliminarService: EliminarreparacaoserviceService,
    private printService: PrintReparacaoService,

    private http: HttpClient,
  ) 
  { 

  }
  
  
  sortData(sort: Sort) {
    this.teste = this.reparacaoDetailhesService.getSort(sort).subscribe(data =>{
      this.pages = data['pages_list']
      this.reparacoes = data['results']
      this.page_links = this.pages['page_links']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
  
    const data = this.reparacoes.slice();
    this.reparacoes = data
   
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':  return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'date_created': return compare(a.date_created, b.date_created, isAsc);
        case 'date_completed': return compare(a.date_completed, b.date_completed, isAsc);
        default: return 0;
      }
    });
  }



  ngOnInit() {
   
    this.get_request = this.reparacaoDetailhesService.getReparacoes('').subscribe(data =>{
      this.pages = data['pages_list']
      this.reparacoes = data['results']
      this.page_links = this.pages['page_links']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
   
  }

  ngOnDestroy(){
    //  this.get_request.unsubscribe();
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
    
    this.get_request = this.reparacaoDetailhesService.getReparacoes(url).subscribe(data =>{
      this.pages = data['pages_list']
      this.page_links= this.pages['page_links']
      this.reparacoes = data['results']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
      if (this.list_to_print != null && this.list_to_print.length > 0){
        this.reparacoes.forEach(r => {
          if(this.list_to_print.includes(r.id)){
            this.selected = true
          }
          else{
            this.selected= false
          }
          r["selected"]=this.selected
        });
      }
    });
    
  }

  print_list(id:number){
    if (this.list_to_print.includes(id)){
      // console.log(this.list_to_print.includes(reparacoesDiarias))
      // console.log(this.list_to_print.indexOf(id))
      this.list_to_print.splice(this.list_to_print.indexOf(id),1)
    }
    else {
      this.list_to_print.push(id)
    }
  }

  reparacoesDiarias():void
  {
    this.printService.setList(this.list_to_print);//subject.asObservable());
    this.router.navigate(['reparacao/conta/'])
  }

}


function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}