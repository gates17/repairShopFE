import { Component, OnInit, Input } from '@angular/core';
import { HtmlToPdfComponent } from '../html-to-pdf/html-to-pdf.component';
import { Router, ActivatedRoute } from '@angular/router';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  

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
    document.getElementById('header').style.display="none";
    console.log(document.getElementById('accoes'));
  }

  print(){
    this.captureScreen()
    this.router.navigate(['/cliente'])
  }
  
  ngOnDestroy(){
    //this.printSub.unsubscribe()
  }
}

/*  local print classes
export class PrintClienteComponent implements OnInit {

  @Input() formData:any;

  private printer: HtmlToPdfComponent;
  private printSub: any;
  message:any
  

  constructor( private route: ActivatedRoute,private router:Router ) { 
      //super(router); 
  }
  ngOnInit() {
    //this.message = this.receiveMessage(event);
    document.getElementById('accoes').style.display="none";
    console.log(document.getElementById('accoes'))
    console.log(this.formData);
  }

  receiveMessage($event) {
    this.message = $event;
    console.log(this.message)
   
  }
  print(){


    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      //pdf.read('MYPdf.pdf');

      pdf.save('MYPdf.pdf'); // Generated PDF   
      console.log("pdf")
    });
    this.router.navigate(['/cliente']);
  }

  

}
*/