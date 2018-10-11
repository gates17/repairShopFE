import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  @Input() pesquisa: any;
  searchQuery:any;
  searchStartQuery:any;
  searchEndQuery:any;
  search:any;
  teste: any;
  data:string;
  constructor(
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }
  
  submitPesquisa($event, formData){
    this.teste = $event;
    let query = formData.value['q'];
    let queryDataStart = formData.value['qdi']
    let queryDataEnd = formData.value['qdf']
   
    console.log(formData)
    console.log(queryDataStart)
    console.log(queryDataEnd)
    if (query){
      this.router.navigate(['/search', {q: this.searchQuery}])
      //pedido para servidor com os params na query
    }
   
    if(queryDataStart){
      let myDateParser = new Date(queryDataStart.year, queryDataStart.month-1, queryDataStart.day);
      let myDate = this.datePipe.transform(myDateParser,"yyyy-MM-dd")
  
      this.router.navigate(['/search', {qdi: myDate}])
    }
    if(queryDataEnd){
      let myDateParser = new Date(queryDataEnd.year, queryDataEnd.month-1, queryDataEnd.day);
      let myDate = this.datePipe.transform(myDateParser,"yyyy-MM-dd")
      this.router.navigate(['/search', {qdf: myDate}])
    }
    if(queryDataEnd && queryDataStart){
      let myDateStartParser = new Date(queryDataStart.year, queryDataStart.month-1, queryDataStart.day);
      let myDateStart = this.datePipe.transform(myDateStartParser,"yyyy-MM-dd")
      let myDateEndParser = new Date(queryDataEnd.year, queryDataEnd.month-1, queryDataEnd.day);
      let myDateEnd = this.datePipe.transform(myDateEndParser,"yyyy-MM-dd")
      this.router.navigate(['/search', {qdi: myDateStart, qdf:myDateEnd}])
    }

  }
  
  searchChange(query){
    this.search='query';
    if (query){
      this.router.navigate(['/search', {q: query}])
    }
  }
  searchDataInicio(query){
    this.search='query';

    if (query){
      let ngbDate = this.searchStartQuery;
      let myDateParser = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
      let myDate = this.datePipe.transform(myDateParser,"yyyy-MM-dd")
    }
  }
  searchDataFim(query){
    this.search='query';
    console.log("DATAFIM  ")
    if (query){
      let ngbDate = this.searchEndQuery;
      let myDateParser = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
      let myDate = this.datePipe.transform(myDateParser,"yyyy-MM-dd")
    }
  }
  
}
