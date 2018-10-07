import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() pesquisa: any;
  searchQuery:any;
  search:any;
  teste: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  submitPesquisa($event, formData){
    this.teste = $event;
    let query = formData.value['q'];
    if (query){
      this.router.navigate(['/search', {q: query}])
      //pedido para servidor com os params na query
    }
    console.log(query);
  }
  
  searchChange(query){
    this.search='query';
    if (query){
      console.log(this.search);

      this.router.navigate(['/search', {q: query}])
    }
  }
  
}
