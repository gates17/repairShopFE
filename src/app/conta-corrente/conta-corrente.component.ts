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
  
  constructor(
    private getClientesService: ConsultarService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.clienteSub = this.getClientesService.getClientes('').subscribe(data =>{
        this.clientes = data['results']
        console.log(data)
        console.log("clientes", this.clientes)
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

}
