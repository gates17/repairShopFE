import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AlterarreparacaoserviceService } from '../services/alterarreparacao/alterarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';

@Component({
  selector: 'app-alterarreparacao',
  templateUrl: './alterarreparacao.component.html',
  styleUrls: ['./alterarreparacao.component.scss']
})
export class AlterarreparacaoComponent implements OnInit {
 
  reparacao: IReparacao;
  reparacaoSub: Subscription;
  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date_completed: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alterarReparacaoService: AlterarreparacaoserviceService
  ) { }

  ngOnInit() {
    this.reparacaoSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.alterarReparacaoService.getReparacao(id).subscribe((reparacao: IReparacao) => {
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

  saveReparacao() {
    this.alterarReparacaoService.updateReparacao(this.reparacaoForm.value,this.reparacao.id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}