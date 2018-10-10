import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [DetalhesreparacaoserviceService]

})
export class SearchResultsComponent implements OnInit {
  private routeSub: any;
  private get_request: any;
  query: any;
  reparacoes: any;

  constructor(
    private route: ActivatedRoute,
    private reparacaoDetailhesService: DetalhesreparacaoserviceService
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
}
