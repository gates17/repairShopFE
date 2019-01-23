import { Component, OnInit, ElementRef ,ViewChild, Input} from '@angular/core';  
import { DetalhesclienteComponent } from '../cliente-details/detalhescliente.component';
import { DetalhesreparacaoComponent } from '../reparacao-details/detalhesreparacao.component';
import {Router, Route, ActivatedRoute} from '@angular/router';

import * as jspdf from 'jspdf';   
import * as html2canvas from 'html2canvas';  

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.scss']
})
export class HtmlToPdfComponent implements OnInit {
  //@ViewChild(DetalhesclienteComponent) cliente: DetalhesclienteComponent;

  @Input() formData:any;
  message:any;
  vertical_padding:number = 20;
  horizontal_padding:number = 20;
  data_wrap:Array<string> =[];
  total:number = 0;
  pago:number =0;
  constructor(
    router: Router
  ) { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
   
  }


  public captureHtml(reparacoes:any){
    var data = document.getElementById('contentToConvert');  
    let pdf = new jspdf('p','mm','a4');
    pdf.setFontSize(12)

    
    pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
    pdf.text(this.horizontal_padding+10, this.vertical_padding, 'Orçamento')
    pdf.text(this.horizontal_padding+50, this.vertical_padding, 'Preço')
    pdf.text(this.horizontal_padding+80, this.vertical_padding, 'Peso')
    for(let reparacao of reparacoes) 
    {
     
      this.vertical_padding+=10
      pdf.text(this.horizontal_padding, this.vertical_padding,JSON.stringify(reparacao.id))
      pdf.text(this.horizontal_padding+10, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.budget)))
      pdf.text(this.horizontal_padding+50, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.price)))
      pdf.text(this.horizontal_padding+80, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.weight)))
    }
    pdf.save('MYPDF.pdf')
 
  }

  public captureReparacaoHtml(reparacoes:any){
    var data = document.getElementById('contentToConvert');  
    let pdf = new jspdf('p','mm','a4');
    pdf.pageHeight=295

    
    pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
    pdf.text(this.horizontal_padding+10, this.vertical_padding, 'Orçamento')
    pdf.text(this.horizontal_padding+50, this.vertical_padding, 'Preço')
    pdf.text(this.horizontal_padding+80, this.vertical_padding, 'Peso')
    for(let reparacao of reparacoes) 
    {

      this.total = this.total + parseFloat(reparacao.price)
      this.pago +=  parseFloat(reparacao.pagamento_parcial)
      this.vertical_padding+=10
     
      if (this.vertical_padding>=pdf.pageHeight)
      {
        console.log(this.vertical_padding)
        console.log(pdf.pageHeight  )
        console.log(pdf.internal.pageSize.height)
        pdf.addPage();
        this.vertical_padding=20
        pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
        pdf.text(this.horizontal_padding+10, this.vertical_padding, 'Orçamento')
        pdf.text(this.horizontal_padding+50, this.vertical_padding, 'Preço')
        pdf.text(this.horizontal_padding+80, this.vertical_padding, 'Peso')
        this.vertical_padding+=10
      }
      pdf.text(this.horizontal_padding, this.vertical_padding,JSON.stringify(reparacao.id))
      pdf.text(this.horizontal_padding+10, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.budget)))
      pdf.text(this.horizontal_padding+50, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.price)))
      pdf.text(this.horizontal_padding+80, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.weight)))
    }
    if (this.vertical_padding>=pdf.pageHeight)
    {
        pdf.addPage();
        this.vertical_padding=20
        pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
        pdf.text(this.horizontal_padding+10, this.vertical_padding, 'Orçamento')
        pdf.text(this.horizontal_padding+50, this.vertical_padding, 'Preço')
        pdf.text(this.horizontal_padding+80, this.vertical_padding, 'Peso')
        this.vertical_padding+=10
    }
    pdf.text(this.horizontal_padding, this.vertical_padding+10,'Total')
    pdf.text(this.horizontal_padding+80, this.vertical_padding+10,String(this.total))
    pdf.text(this.horizontal_padding, this.vertical_padding+20,'Pagou')
    pdf.text(this.horizontal_padding+80, this.vertical_padding+20,String(this.pago))


     
  
    // for(let reparacao of reparacoes) 
    // {

    //   this.total = this.total + parseFloat(reparacao.price)
    //   this.pago +=  parseFloat(reparacao.pagamento_parcial)
    //   pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
    //   pdf.text(this.horizontal_padding+10, this.vertical_padding,JSON.stringify(reparacao.id))

    //   this.vertical_padding+=10
    //   pdf.text(this.horizontal_padding, this.vertical_padding, 'Orçamento')
    //   pdf.text(this.horizontal_padding+30, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.budget)))

    //   this.vertical_padding+=10
    //   pdf.text(this.horizontal_padding, this.vertical_padding, 'Preço')
    //   pdf.text(this.horizontal_padding+30, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.price)))

    //   this.vertical_padding+=10
    //   pdf.text(this.horizontal_padding, this.vertical_padding, 'Peso')
    //   pdf.text(this.horizontal_padding+30, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.weight)))

    //   this.vertical_padding+=10
    //   pdf.text(this.horizontal_padding, this.vertical_padding, 'Pago')
    //   pdf.text(this.horizontal_padding+30, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.pagamento_parcial)))

    //   this.vertical_padding+=20
    //   this.vertical_padding+=20

    //   if (this.vertical_padding>=pdf.pageHeight)
    //   {
    //     console.log(pdf.options)
    //     console.log(this.vertical_padding)
    //     console.log(pdf.pageHeight  )
    //     console.log(pdf.internal.pageSize.height)
    //     pdf.addPage();
    //   }
    // }
    // pdf.text(this.horizontal_padding, this.vertical_padding+10,'Total')
    // pdf.text(this.horizontal_padding+30, this.vertical_padding+10,String(this.total))
    // pdf.text(this.horizontal_padding, this.vertical_padding+20,'Pagou')
    // pdf.text(this.horizontal_padding+30, this.vertical_padding+20,String(this.pago))
    pdf.save('MYPDF.pdf')
  }

  public captureScreen()  
  { 
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
    });  
  }  
}



  
