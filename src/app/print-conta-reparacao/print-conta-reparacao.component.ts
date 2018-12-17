import { Component, OnInit } from '@angular/core';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { PrintReparacaoService } from '../services/print/print-reparacao.service';
@Component({
  selector: 'app-print-conta-reparacao',
  templateUrl: './print-conta-reparacao.component.html',
  styleUrls: ['./print-conta-reparacao.component.scss']
})
export class PrintContaReparacaoComponent extends HtmlToPdfComponent implements OnInit {

  private printer: HtmlToPdfComponent;
  private printSub: any;
  reparacoes: any;

  dataToConvert:any;
 
  constructor( 
    private route: ActivatedRoute,
    private router:Router,
    private prs: PrintReparacaoService
    ) { 
    super(router);
  }
 
  ngOnInit() {
    this.reparacoes = this.prs.getList();
    console.log(this.reparacoes)
    this.dataToConvert = document.getElementById('contentToConvert');
  }

  print(){
    this.captureScreen()
    this.router.navigate(['/cliente'])
  }

  printAll(){
    this.captureReparacaoHtml(this.reparacoes)
    this.router.navigate(['/reparacao'])    
  }

  receiveMessage($event){
    this.message=$event;
  }
}
