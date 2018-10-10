import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [DetalhesreparacaoserviceService,EliminarreparacaoserviceService]

})
export class SearchResultsComponent implements OnInit {
  private routeSub: any;
  private get_request: any;
  private delete_request :any;
  query: any;
  reparacoes: any;

  public pages=[];
  public page_links=[];
  public last_page: any;
  public previous_url:any;
  public next_url:any;
  public first_page: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService,
    private reparacaoEliminarService: EliminarreparacaoserviceService,
      
  ) { }


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      if(params['q']){
        this.get_request = this.reparacaoDetailhesService.searchReparacoes(params['q'],'q').subscribe(data => {
          this.reparacoes = data['results']
        });
      }
      else if(params['qdi'] && params['qdf'] ){
        this.query={qdi:params['qdi'],qdf:params['qdf']}
        this.get_request = this.reparacaoDetailhesService.searchReparacoesDateBetween(params['qdi'],params['qdf'],'qdi','qdf').subscribe(data => {
          this.reparacoes = data['results']
        });
      }
      else if(params['qdi']){
        this.get_request = this.reparacaoDetailhesService.searchReparacoes(params['qdi'],'qdi').subscribe(data => {
          this.reparacoes = data['results']
        });
      }
      else if(params['qdf']){
        this.get_request = this.reparacaoDetailhesService.searchReparacoes(params['qdf'],'qdf').subscribe(data => {
          this.reparacoes = data['results']
        });
      }
      console.log(this.query)
      console.log(params['q'])
      console.log(params['qdi'])
      console.log(params['qdf'])
     
    
     
    })
  }
 
  ngOnDestroy() {
    this.routeSub.unsubscribe()
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

  remove(id: number, i:number) {
    this.delete_request = this.reparacaoEliminarService.removerReparacao(id).subscribe(result => {
      this.reparacoes.splice(i, 1);
    }, error => console.error(error)); 
  }

  onPageChanged(url: string) {
    console.log(url)
    this.get_request = this.reparacaoDetailhesService.getReparacoes(url).subscribe(data =>{
      this.pages = data['pages_list']
      this.page_links= this.pages['page_links']
      this.reparacoes = data['results']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
  }
}
