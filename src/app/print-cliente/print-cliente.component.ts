import { Component, OnInit, Input } from '@angular/core';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-cliente',
  templateUrl: './print-cliente.component.html',
  styleUrls: ['./print-cliente.component.scss']
})


export class PrintClienteComponent extends HtmlToPdfComponent  implements OnInit {
  @Input() formData:any;
  
  private printer: HtmlToPdfComponent;
  private printSub: any;
  message:any;
  dataToConvert:any;
 
  constructor( private route: ActivatedRoute,private router:Router ) { 
    super(router);
  }
  ngOnInit() {
    this.message = this.receiveMessage(event);
    this.dataToConvert = document.getElementById('contentToConvert');
    document.getElementById('accoes').style.display="none";
    //document.getElementById('header').style.display="none";
    console.log(document.getElementById('accoes'));
  }

  print(){
    this.captureScreen()
    this.router.navigate(['/cliente'])
  }
}