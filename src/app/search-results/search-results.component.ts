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
        this.query=params['q']
        console.log(this.query)
      }
      else if(params['qdi'] && params['qdf'] ){
        this.query={qdi: params['qdi'], qdf:params['qdf']}
        console.log(this.query)
      }
      else if(params['qdi']){
        this.query=params['qdi']
        console.log(this.query)
      }
      else if(params['qdf']){
        this.query=params['qdf']
        console.log(this.query)
      }
     
    
      this.get_request = this.reparacaoDetailhesService.searchReparacoes(this.query).subscribe(data => {
        this.reparacoes = data['results']
        console.log(data)
      });
    })
  }
 
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
