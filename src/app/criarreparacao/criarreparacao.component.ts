import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CriarreparacaoserviceService } from '../services/reparacao/criarreparacao/criarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';


@Component({
  selector: 'app-criarreparacao',
  templateUrl: './criarreparacao.component.html',
  styleUrls: ['./criarreparacao.component.scss']
})
export class CriarreparacaoComponent implements OnInit {

  reparacao: string;
  reparacaoSub: Subscription;
  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl(''),
    date_completed: new FormControl(''),
    tlf: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl('')
  })

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
    this.reparacaoCreateService.guardarReparacao(this.reparacaoForm).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}