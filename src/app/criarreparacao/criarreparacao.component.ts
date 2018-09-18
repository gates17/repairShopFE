import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CriarreparacaoserviceService } from '../services/criarreparacao/criarreparacaoservice.service';
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
    description: new FormControl('')
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
    console.log(this.reparacaoForm.value)
    this.reparacaoCreateService.guardarReparacao(this.reparacaoForm).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}