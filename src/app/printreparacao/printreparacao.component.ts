import { Component, OnInit, Input } from '@angular/core';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PrintReparacaoService } from '../services/print/print-reparacao.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-printreparacao',
  templateUrl: './printreparacao.component.html',
  styleUrls: ['./printreparacao.component.scss']
})
export class PrintreparacaoComponent extends HtmlToPdfComponent  implements OnInit {
 
  // public data: any;
  // private printer: HtmlToPdfComponent;
  // private printSub: any;
  message:any;

  dataToConvert:any;

  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date_completed: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl(''),
    weight: new FormControl(''),
    foto: new FormControl(''),
    materials: new FormControl(''),
    faturado: new FormControl('')

  });
  
  constructor( 
    private route: ActivatedRoute,
    private router:Router,
    private prs: PrintReparacaoService,
  ) { 
    super(router);
  }

  ngOnInit() {
    this.reparacaoForm = this.prs.getData();

    this.dataToConvert = document.getElementById('contentToConvert');
    //document.getElementById('accoes').style.display="none";
    //document.getElementById('header').style.display="none";
  }

  print(){
    this.captureScreen()
  
  }
  
  ngOnDestroy(){
    //this.printSub.unsubscribe()
  }

  receiveMessage($event){
    this.message=$event;
  }
}
