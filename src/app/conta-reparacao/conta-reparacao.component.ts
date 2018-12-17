import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { PrintReparacaoService } from '../services/print/print-reparacao.service';

import { IReparacao } from '../models/reparacao';

import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-conta-reparacao',
  templateUrl: './conta-reparacao.component.html',
  styleUrls: ['./conta-reparacao.component.scss'],
  providers: [ DetalhesreparacaoserviceService]

})
export class ContaReparacaoComponent implements OnInit {
  private _reparacoesurl: string ="http://localhost:8000/reparacao/";
  private teste:any;

  private get_request: any;
  private delete_request:any;
  list_to_print:any={};// Observable<any>;
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
  new_date:any;
  public reparacoes = [];
  sortedData: any[];
  subscription: Subscription;

  searchStartQuery:any;
  search:any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService,
    private prs: PrintReparacaoService,
    private http: HttpClient,

    private datePipe: DatePipe
  ) 
  { 
    // this.subscription = this.prs.getList().subscribe(message => { 
    //   console.log(message)
    //   this.list_to_print = message;
    // });
  }

 
  

  ngOnInit() {
    this.list_to_print= this.prs.getList()//.subscribe(message => this.list_to_print=message)

    if(this.list_to_print != undefined && this.list_to_print!= null && this.list_to_print.length > 0){
      this.get_request = this.http.get<any[]>("http://localhost:8000/reparacao/?q=list&qp="+this.list_to_print).subscribe(data =>{
        this.pages = data['pages_list']
        this.page_links= this.pages['page_links']
        this.reparacoes = data['results']
        this.last_page = this.page_links[this.page_links.length-1]
        this.previous_url = this.pages['previous_url']
        this.next_url = this.pages['next_url']
        this.first_page = this.page_links[0] 
      });
    }
    else{
      this.get_request = this.http.get<any[]>("http://localhost:8000/reparacao/?q=today").subscribe(data =>{
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

  onPageChanged(url: string) {
    
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
  onDateChange() {
    this.get_request = this.http.get<any[]>("http://localhost:8000/reparacao/?q=day&qd=" + this.new_date).subscribe(data =>{
      this.pages = data['pages_list']
      this.page_links= this.pages['page_links']
      this.reparacoes = data['results']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
  }
  searchData(){
    this.search='query';
    if(this.searchStartQuery != undefined && this.searchStartQuery != null){
      let ngbDate = this.searchStartQuery;
      let myDateParser = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
      let myDate = this.datePipe.transform(myDateParser,"yyyy-MM-dd")
      this.new_date=myDate
    }
    else{this.new_date=null}
  }

  print(){
    console.log(this.reparacoes)
    this.prs.setList(this.reparacoes)
    this.router.navigate(['/reparacao/conta/print'])
  }
}
