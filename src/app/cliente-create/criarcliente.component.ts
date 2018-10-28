import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    name: new FormControl('', Validators.required),
    tlf: new FormControl('', [ Validators.required, Validators.max(999999999), Validators.min(900000000)]),
    address: new FormControl(''),
    zip_code:  new FormControl(''),
    localidade:  new FormControl(''),
    total_spent_by_client:  new FormControl('')
  })

  // name_id: new FormControl('',Validators.required),
  // description: new FormControl('',Validators.maxLength(1024)),
  // price: new FormControl('',Validators.max(9999999999.99)),
  // budget: new FormControl('',[Validators.required, Validators.max(9999999999.99)]),
  // date_completed: new FormControl(null),
  // weigth: new FormControl('',Validators.max(9999999999.99)),
  // foto: new FormControl(''),
  // materials: new FormControl(''),
  // faturado: new FormControl(false),
  // pago: new FormControl(false)

  validation_messages = {
    'name': [
      { type: 'required', message: 'É necessário inserir o nome' }
    ],
    'tlf': [
      { type: 'size', message: 'Insira um contacto com 9 digitos'},
      { type: 'required', message: 'É necessário inserir um contacto'  }
    ],
   
    }

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