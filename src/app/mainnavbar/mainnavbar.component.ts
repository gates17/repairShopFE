import { Component, OnInit, OnDestroy, ViewChild,Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.scss']
})
export class MainnavbarComponent implements OnInit {
  @ViewChild(SearchComponent) search;
  searchParam:any;
  teste:any;
  private routeSub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=> {
      this.searchParam = params['q']
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
  getSearch($event){
    this.teste = $event;
    this.searchParam = $event;
  }
  ngAfterViewInit(): void {
 
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

}