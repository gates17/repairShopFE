import { Component, OnInit, Input } from '@angular/core';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: ['./conta-corrente.component.scss']
})
export class ContaCorrenteComponent implements OnInit {
  reparacoes:any [];
  private clienteSub: any;
  private id:any;
  @Input() cliente_id;
  constructor(
    private reparacoesClienteService: DetalhesreparacaoserviceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];
console.log(this.id)
      this.reparacoesClienteService.getReparacoesCliente(this.id).subscribe(data =>{
        this.reparacoes = data['results']
        console.log(data)
        console.log("reparacaoes", this.reparacoes)
      });
    });
  }

  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  get_detail(id:number) {
    if (id) {
      this.router.navigate(['reparacao/details/' + id])
    } else {
      this.gotoList();
    }
  } 

}
