import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RemoverService } from '../services/cliente/removerservice/remover.service';
import { ICliente } from '../models/cliente';

@Component({
  selector: 'app-removercliente',
  templateUrl: './removercliente.component.html',
  styleUrls: ['./removercliente.component.scss']
})
export class RemoverclienteComponent implements OnInit, OnDestroy {
  cliente: ICliente;
  clienteSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteRemoveService: RemoverService
  ) { }

  ngOnInit() {
    this.clienteSub = this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.clienteRemoveService.getCliente(id).subscribe((cliente: ICliente) => {
          if (cliente) {
            this.cliente = cliente;
            this.cliente.url = cliente.url;
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.clienteSub.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/clientes']);
  }
  remove(id: number) {
    this.clienteRemoveService.removerCliente(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}