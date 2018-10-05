import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';

@Component({
  selector: 'app-eliminarreparacao',
  templateUrl: './eliminarreparacao.component.html',
  styleUrls: ['./eliminarreparacao.component.scss']
})

export class EliminarreparacaoComponent implements OnInit, OnDestroy {
  reparacao: IReparacao;
  reparacaoSub: Subscription;
  private request:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoRemoveService: EliminarreparacaoserviceService
  ) { }

  ngOnInit() {
    this.reparacaoSub = this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.request = this.reparacaoRemoveService.getReparacao(id).subscribe((reparacao: IReparacao) => {
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

  ngOnDestroy() {
    this.reparacaoSub.unsubscribe();
    this.request.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/reparacao']);
  }
  remove(id: number) {
    this.reparacaoRemoveService.removerReparacao(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}