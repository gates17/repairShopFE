import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import {map} from 'rxjs/operators';
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
  images: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService,
    private reparacaoEliminarService: EliminarreparacaoserviceService,
    private _http: HttpClient
  ) {}
  ngOnInit() {
    //reparacaoDetailhesService.getReparacoes()  = this.http.get<IReparacao[]>(this._reparacoesurl)
    this.get_request = this.reparacaoDetailhesService.getReparacoes().subscribe(data => {
      this.reparacoes = data
      console.log(data)
    });
      
  

  }

  ngOnDestroy(){
    this.get_request.unsubscribe();
    //this.delete_request.unsubscribe();
    //this.reparacaoSub.unsubscribe();
  }
  
  
  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  remove(id: number, i:number) {
    this.delete_request = this.reparacaoEliminarService.removerReparacao(id).subscribe(result => {
      this.reparacoes.splice(i, 1);
      console.log(this.reparacoes)


    }, error => console.error(error)); 

  }

  get_detail(id:number) {
    if (id) {
          this.router.navigate(['reparacao/details/' + id])
        } else {
          this.gotoList();
        }

  } 
}
  
