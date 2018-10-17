import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component'
import { PrintReparacaoService } from '../services/print/print-reparacao.service';

@Component({
  selector: 'app-detalhesreparacao',
  templateUrl: './detalhesreparacao.component.html',
  styleUrls: ['./detalhesreparacao.component.scss'],
  providers: [DetalhesreparacaoserviceService,EliminarreparacaoserviceService]
})
export class DetalhesreparacaoComponent implements OnInit, OnDestroy {

  private request: any;
  reparacao: IReparacao;
  reparacaoSub: Subscription;
  images: Array<string>;
  id:any;

  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date_completed: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl(''),
    weight: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl(''),
    faturado: new FormControl('')

  })


  constructor(
    private prs: PrintReparacaoService, 
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService,
    private reparacaoEliminarService: EliminarreparacaoserviceService,
    private _http: HttpClient
    
  ) { }


  ngOnInit() {
    this.reparacaoSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      
      if (this.id) {
        this.request = this.reparacaoDetailhesService.getReparacao(this.id).subscribe((reparacao: IReparacao) => {
          if (reparacao) {
            this.reparacao = reparacao;


            this.reparacao.url = reparacao.url;

            this.reparacaoForm.controls.name.setValue(this.reparacao.name_id);
            this.reparacaoForm.controls.description.setValue(this.reparacao.description);
            this.reparacaoForm.controls.date_completed.setValue(this.reparacao.date_completed);
            this.reparacaoForm.controls.price.setValue(this.reparacao.price);
            this.reparacaoForm.controls.budget.setValue(this.reparacao.budget);
            this.reparacaoForm.controls.weight.setValue(this.reparacao.weight);
            this.reparacaoForm.controls.foto.setValue(this.reparacao.foto);
            this.reparacaoForm.controls.materials.setValue(this.reparacao.materials);
            
          } else {
            alert("A reparacação não foi encontrada. Clique em ok para retornar às reparações.")
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(){
    this.reparacaoSub.unsubscribe();
  }
 
    gotoList() {
    this.router.navigate(['/reparacao']);
  }

  remove(id: number) {
    this.reparacaoEliminarService.removerReparacao(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));

 
  }

  print(){
      // this.clientData= this.cliente;
      this.reparacaoForm.controls.name.setValue(this.reparacao.name_id);
      this.reparacaoForm.controls.description.setValue(this.reparacao.description);
      this.reparacaoForm.controls.date_completed.setValue(this.reparacao.date_completed);
      this.reparacaoForm.controls.price.setValue(this.reparacao.price);
      this.reparacaoForm.controls.budget.setValue(this.reparacao.budget);
      this.reparacaoForm.controls.weight.setValue(this.reparacao.weight);
      this.reparacaoForm.controls.foto.setValue(this.reparacao.foto);
      this.reparacaoForm.controls.materials.setValue(this.reparacao.materials);
      
      this.prs.setData(this.reparacaoForm);
   

      /*
      this.messageEvent.emit({
        form: this.reparacaoForm.controls,
        reparacao: this.reparacao,
        value: this.reparacaoForm.value
      });
      console.log(this.reparacaoForm.controls)
      console.log(this.reparacao)
      console.log(this.reparacaoForm.value)
      */
      this.router.navigate(['/reparacao/print']);
    
  }
  

}