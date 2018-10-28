import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PrintReparacaoService } from '../services/print/print-reparacao.service';

@Component({
  selector: 'app-conta-corrente-cliente',
  templateUrl: './conta-corrente-cliente.component.html',
  styleUrls: ['./conta-corrente-cliente.component.scss']
})
export class ContaCorrenteClienteComponent implements OnInit {
  reparacoes:any [];
  private clienteSub: any;
  private id:any;
  private empty_url: string ='';

  public pages=[];
  public page_links=[];
  public last_page: any;
  public previous_url:any;
  public next_url:any;
  public first_page: any;

  @Input() cliente_id;

  constructor(
    private reparacoesClienteService: DetalhesreparacaoserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private prs: PrintReparacaoService, 

  ) { }

  ngOnInit() {
    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reparacoesClienteService.getReparacoesCliente(this.id, this.empty_url).subscribe(data =>{
        this.pages = data['pages_list']
        this.page_links= this.pages['page_links']
        this.reparacoes = data['results']
        this.last_page = this.page_links[this.page_links.length-1]
        this.previous_url = this.pages['previous_url']
        this.next_url = this.pages['next_url']
        this.first_page = this.page_links[0]
        console.log(data)
      });
    });
  }

  ngOnDestroy() {
    this.clienteSub.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
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
    console.log(this.reparacoes)
    this.prs.setData(this.reparacoes)
    this.router.navigate(['/cliente/details/' + this.id +'/conta/print']);
  }

  printAll(){
    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reparacoesClienteService.getAllReparacoesCliente(this.id).subscribe(data =>{
        this.reparacoes = data
        console.log(this.reparacoes)
        this.prs.setData(data)
        this.router.navigate(['/cliente/details/' + this.id +'/conta/print']);
      });
    });
  }

   onPageChanged(url: string) {
     console.log(url)
    this.clienteSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reparacoesClienteService.getReparacoesCliente(this.id,url).subscribe(data =>{
        this.pages = data['pages_list']
        this.page_links= this.pages['page_links']
        this.reparacoes = data['results']
        this.last_page = this.page_links[this.page_links.length-1]
        this.previous_url = this.pages['previous_url']
        this.next_url = this.pages['next_url']
        this.first_page = this.page_links[0]
        console.log(data)
      });
    });
  }
}
