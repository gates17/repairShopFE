import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap  } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlterarreparacaoserviceService } from '../services/reparacao/alterarreparacao/alterarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alterarreparacao',
  templateUrl: './alterarreparacao.component.html',
  styleUrls: ['./alterarreparacao.component.scss']
})
export class AlterarreparacaoComponent implements OnInit, OnDestroy {

  date: any;
  reparacao:  IReparacao;
  reparacaoSub: Subscription;
  private request: any;
  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date_completed: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl(''),
    tlf: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl(''),
    faturado: new FormControl('')

  })

  constructor(
    
    private route: ActivatedRoute,
    private router: Router,
    private alterarReparacaoService: AlterarreparacaoserviceService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.reparacaoSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        //form pre-load
       
        console.log(this.reparacaoForm)

        this.request = this.alterarReparacaoService.getReparacao(id).subscribe((reparacao: IReparacao) => {
          if (reparacao) {
            this.reparacao = reparacao;
            this.reparacao.url = reparacao.url;
            console.log(reparacao)
            this.reparacaoForm.controls.name.setValue(this.reparacao.name);
            this.reparacaoForm.controls.description.setValue(this.reparacao.description);
            this.reparacaoForm.controls.date_completed.setValue(this.reparacao.date_completed);
            this.reparacaoForm.controls.price.setValue(this.reparacao.price);
            this.reparacaoForm.controls.budget.setValue(this.reparacao.budget);
            this.reparacaoForm.controls.tlf.setValue(this.reparacao.tlf);
            this.reparacaoForm.controls.foto.setValue(this.reparacao.foto);
            this.reparacaoForm.controls.materials.setValue(this.reparacao.materials);
            this.reparacaoForm.controls.faturado.setValue(this.reparacao.faturado);

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

  saveReparacao() {
    console.log(this.reparacaoForm.controls.date_completed.value)
    let date = this.reparacaoForm.controls.date_completed.value
    let dateParser = new Date(date.year, date.month-1, date.day);
    let date_completed = this.datePipe.transform(dateParser ,"yyyy-MM-dd")
    this.reparacaoForm.controls.date_completed.setValue(date_completed.toString())
    this.alterarReparacaoService.updateReparacao(this.reparacaoForm.value,this.reparacao.id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}