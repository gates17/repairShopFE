import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/eliminarreparacao/eliminarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhesreparacao',
  templateUrl: './detalhesreparacao.component.html',
  styleUrls: ['./detalhesreparacao.component.scss'],
  providers: [DetalhesreparacaoserviceService,EliminarreparacaoserviceService]
})
export class DetalhesreparacaoComponent implements OnInit {
 
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
    
  ) { }

  ngOnInit() {
  
    this.reparacaoDetailhesService.getReparacoes().subscribe(data => this.reparacoes = data);
    console.log(this.reparacaoDetailhesService.getReparacoes())

    this.reparacaoSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.reparacaoDetailhesService.getReparacao(id).subscribe((reparacao: IReparacao) => {
          if (reparacao) {
            this.reparacao = reparacao;
            this.reparacao.url = reparacao.url;
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

 
  
  gotoList() {
    this.router.navigate(['/reparacao']);
  }


  remove(id: number, i:number) {
    this.reparacaoEliminarService.removerReparacao(id).subscribe(result => {
      this.reparacoes.splice(i, 1);
      console.log(this.reparacoes)


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