import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conta-corrente-cliente',
  templateUrl: './conta-corrente-cliente.component.html',
  styleUrls: ['./conta-corrente-cliente.component.scss']
})
export class ContaCorrenteClienteComponent implements OnInit {
  reparacoes:any [];
  private clienteSub: any;
  private id:any;
  @Input() cliente_id;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(
    private reparacoesClienteService: DetalhesreparacaoserviceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.reparacoesClienteService.getReparacoesCliente(this.id).subscribe(data =>{
        this.reparacoes = data['results']
        console.log(data)
      });
    });
  }

  gotoList() {
    this.router.navigate(['/cliente']);
  }

  get_detail(id:number) {
    if (id) {
      this.router.navigate(['cliente/details/' + id])
    } else {
      this.gotoList();
    }
  } 

  print(){
  
    //  this.reparacaoForm.controls.tlf.setValue(this.reparacao.tlf);
    //  this.reparacaoForm.controls.address.setValue(this.reparacao.address);
    //  this.reparacaoForm.controls.zip_code.setValue(this.reparacao.zip_code);
    //  this.reparacaoForm.controls.localidade.setValue(this.reparacao.localidade);
    //  this.reparacaoForm.controls.name.setValue(this.reparacao.name);
    //  this.reparacaoForm.controls.date_created.setValue(this.reparacao.date_created);
    console.log(this.reparacoes)
 
    this.messageEvent.emit(
    {
      reparacoes: this.reparacoes, 
    });
    this.router.navigate(['/cliente/details/' + this.id +'/conta/print']);
  
   }
}
