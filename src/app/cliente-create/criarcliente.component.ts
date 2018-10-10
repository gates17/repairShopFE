import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CriarService } from '../services/cliente/criarservice/criar.service';
import { ICliente } from '../models/cliente';


@Component({
  selector: 'app-criarcliente',
  templateUrl: './criarcliente.component.html',
  styleUrls: ['./criarcliente.component.scss']
})
export class CriarclienteComponent implements OnInit, OnDestroy {

  private request:any;
  cliente: string;
  clienteSub: Subscription;
  clienteForm = new FormGroup({
    name: new FormControl(''),
    tlf: new FormControl(''),
    address: new FormControl(''),
    zip_code:  new FormControl(''),
    localidade:  new FormControl(''),
    total_spent_by_client:  new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteCreateService: CriarService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    //this.request.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/cliente']);
  }

  createCliente() {
    //this.request = 
    this.clienteCreateService.guardarCliente(this.clienteForm).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}