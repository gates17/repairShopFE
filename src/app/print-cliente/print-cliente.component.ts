import { Component, OnInit } from '@angular/core';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PrintReparacaoService } from '../services/print/print-reparacao.service';

@Component({
  selector: 'app-print-cliente',
  templateUrl: './print-cliente.component.html',
  styleUrls: ['./print-cliente.component.scss']
})


export class PrintClienteComponent extends HtmlToPdfComponent  implements OnInit {
  // private printer: HtmlToPdfComponent;
  // private printSub: any;
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

  constructor( 
    private route: ActivatedRoute,
    private router:Router,
    private prs: PrintReparacaoService,
    ) { 
    super(router);
  }
  ngOnInit() {
    this.clienteForm = this.prs.getData();

    // this.message = this.receiveMessage(event);
    this.dataToConvert = document.getElementById('contentToConvert');
    //document.getElementById('accoes').style.display="none";
    //document.getElementById('header').style.display="none";
    //console.log(document.getElementById('accoes'));
  }

  print(){
    this.captureScreen()
    this.router.navigate(['/cliente'])
  }

  receiveMessage($event){
    this.message=$event;
  }
}