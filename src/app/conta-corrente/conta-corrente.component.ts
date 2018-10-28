import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: ['./conta-corrente.component.scss']
})
export class ContaCorrenteComponent implements OnInit {
  clientes:any [];
  private clienteSub: any;
  private id:any;
  
  public pages=[];
  public page_links=[];
  public last_page: any;
  public previous_url:any;
  public next_url:any;
  public first_page: any;

  constructor(
    private getClientesService: ConsultarService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.clienteSub = this.getClientesService.getClientes('').subscribe(data =>{
        this.clientes = data['results']
        this.pages = data['pages_list']
        this.page_links= this.pages['page_links']
        this.last_page = this.page_links[this.page_links.length-1]
        this.previous_url = this.pages['previous_url']
        this.next_url = this.pages['next_url']
        this.first_page = this.page_links[0]
      });
  }

  gotoList() {
    this.router.navigate(['/reparacao']);
  }

  get_detail(id:number) {
    if (id) {
      this.router.navigate(['cliente/details/' + id])
    } else {
      this.gotoList();
    }
  } 

  onPageChanged(url: string) {
    this.clienteSub = this.getClientesService.getClientes(url).subscribe(data =>{
      this.clientes = data['results']
      this.pages = data['pages_list']
      this.page_links= this.pages['page_links']
      this.last_page = this.page_links[this.page_links.length-1]
      this.previous_url = this.pages['previous_url']
      this.next_url = this.pages['next_url']
      this.first_page = this.page_links[0]
    });
}
}
