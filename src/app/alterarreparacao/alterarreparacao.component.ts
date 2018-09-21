import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap  } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AlterarreparacaoserviceService } from '../services/reparacao/alterarreparacao/alterarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';

@Component({
  selector: 'app-alterarreparacao',
  templateUrl: './alterarreparacao.component.html',
  styleUrls: ['./alterarreparacao.component.scss']
})
export class AlterarreparacaoComponent implements OnInit {


  reparacao:  IReparacao;
  reparacaoSub: Subscription;
  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date_completed: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl(''),
    tlf: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private alterarReparacaoService: AlterarreparacaoserviceService
  ) { }

  ngOnInit() {
    this.reparacaoSub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        //form pre-load
       
        console.log(this.reparacaoForm)



     
        this.alterarReparacaoService.getReparacao(id).subscribe((reparacao: IReparacao) => {
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