import { Component, OnInit } from '@angular/core';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-print-conta-corrente-cliente',
  templateUrl: './print-conta-corrente-cliente.component.html',
  styleUrls: ['./print-conta-corrente-cliente.component.scss']
})
export class PrintContaCorrenteClienteComponent extends HtmlToPdfComponent  implements OnInit {

  private printer: HtmlToPdfComponent;
  private printSub: any;
  message:any;
  dataToConvert:any;
 
  clienteForm = new FormGroup({
    name: new FormControl(''),
    tlf: new FormControl(''),
    address: new FormControl(''),
    zip_code:  new FormControl(''),
    localidade:  new FormControl(''),
    total_spent_by_client:  new FormControl(''),

    date_created:  new FormControl('')
  })

  constructor( private route: ActivatedRoute,private router:Router ) { 
    super(router);
  }

  ngOnInit() {
    this.message = this.receiveMessage(event);
    console.log(this.message)
    this.dataToConvert = document.getElementById('contentToConvert');
  }

  print(){
    this.captureScreen()
    this.router.navigate(['/cliente'])
  }

  receiveMessage($event){
    this.message=$event;
  }
}
