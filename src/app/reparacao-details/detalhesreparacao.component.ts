import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { IReparacao } from '../models/reparacao';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';


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
    tlf: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl('')
  })


  constructor(
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
            alert("A reparacação não foi encontrada. Clique em ok para retornar às reparações.")
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(){
    this.request.unsubscribe();
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
  }
  

}