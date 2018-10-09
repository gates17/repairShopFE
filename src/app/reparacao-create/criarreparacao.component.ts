import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CriarreparacaoserviceService } from '../services/reparacao/criarreparacao/criarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';


@Component({
  selector: 'app-criarreparacao',
  templateUrl: './criarreparacao.component.html',
  styleUrls: ['./criarreparacao.component.scss']
})
export class CriarreparacaoComponent implements OnInit, OnDestroy {

  reparacao: string;
  reparacaoSub: Subscription;
  reparacaoForm = new FormGroup({
    name: new FormControl('',Validators.required),
    description: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl('',Validators.required),
    date_completed: new FormControl(''),
    tlf: new FormControl('',Validators.required),
    foto: new FormControl(''),
    materials: new FormControl(''),
    faturado: new FormControl('')

  })
 
  private subresponse:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoCreateService: CriarreparacaoserviceService
  ) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  createReparacao() {
    this.subresponse = this.reparacaoCreateService.guardarReparacao(this.reparacaoForm).subscribe(result => {
      console.log("teste");
      console.log(result);
      this.gotoList();
    }, error => console.error(error));
  }

  ngOnDestroy():void {
    
    this.subresponse.unsubscribe()  
  }
}