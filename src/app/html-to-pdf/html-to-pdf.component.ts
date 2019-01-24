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
  total_com_iva:number =0;
  valor_do_iva:number =0;
  total_em_divida:number=0;
  desconto:number=0;

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
    pdf.setFontSize(10)

    
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


  public cabecalho(pdf:any){
    pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
    pdf.text(this.horizontal_padding+8, this.vertical_padding, 'Preço')
    pdf.text(this.horizontal_padding+20, this.vertical_padding, 'Peso')
    pdf.text(this.horizontal_padding+30, this.vertical_padding, 'Unidades')
    pdf.text(this.horizontal_padding+44, this.vertical_padding, 'Quantidade')
    pdf.text(this.horizontal_padding+64, this.vertical_padding, 'Total')
    pdf.text(this.horizontal_padding+80, this.vertical_padding, 'Total C/Iva')
    pdf.text(this.horizontal_padding+96, this.vertical_padding, '%Iva')
    pdf.text(this.horizontal_padding+112, this.vertical_padding, 'Iva')
    pdf.text(this.horizontal_padding+124, this.vertical_padding, 'Desconto')
  }

  public faturacao(pdf:any){

    console.log("testes")
    console.log(this.vertical_padding)

    pdf.text(this.horizontal_padding, this.vertical_padding+30,'Total')
    pdf.text(this.horizontal_padding+134, this.vertical_padding+30,String(this.total))
    
    pdf.text(this.horizontal_padding, this.vertical_padding+35,'Total c/ Iva')
    pdf.text(this.horizontal_padding+134, this.vertical_padding+35,String(this.total_com_iva))
  
    pdf.text(this.horizontal_padding, this.vertical_padding+40,'Valor do iva')
    pdf.text(this.horizontal_padding+134, this.vertical_padding+40,String(this.valor_do_iva))
  
    pdf.text(this.horizontal_padding, this.vertical_padding+45,'Desconto')
    pdf.text(this.horizontal_padding+134, this.vertical_padding+45,String(this.desconto))
  
    pdf.text(this.horizontal_padding, this.vertical_padding+50,'Pagou')
    pdf.text(this.horizontal_padding+134, this.vertical_padding+50,String(this.pago))
    
    pdf.text(this.horizontal_padding, this.vertical_padding+55,'Valor em divida')
    pdf.text(this.horizontal_padding+134, this.vertical_padding+55,String(this.total))

  }
  public captureReparacaoHtml(reparacoes:any){
    var data = document.getElementById('contentToConvert');  
    let pdf = new jspdf('l','mm','a5');
    pdf.pageHeight=148
    pdf.setFontSize(8)
    this.vertical_padding = 10
    this.horizontal_padding = 10
    
    this.cabecalho(pdf)


    for(let reparacao of reparacoes) 
    {

      this.total = this.total + parseFloat(reparacao.total_to_pay)
      this.pago +=  parseFloat(reparacao.pagamento_parcial)
      this.total_com_iva = this.total_com_iva +parseFloat(reparacao.total_to_pay_with_tax)
      this.valor_do_iva = this.valor_do_iva +parseFloat(reparacao.tax_to_pay)
      this.total_em_divida = this.total_com_iva - this.pago
      this.desconto=this.desconto+ parseFloat(reparacao.discount)

      this.vertical_padding+=5

     
      if (this.vertical_padding>=pdf.pageHeight)
      {
        pdf.addPage();
        this.vertical_padding=20
        this.cabecalho(pdf)

        // pdf.text(this.horizontal_padding, this.vertical_padding,'Id')
        // pdf.text(this.horizontal_padding+10, this.vertical_padding, 'Preço')
        // pdf.text(this.horizontal_padding+25, this.vertical_padding, 'Peso')
        // pdf.text(this.horizontal_padding+35, this.vertical_padding, 'Unidades')
        // pdf.text(this.horizontal_padding+55, this.vertical_padding, 'Quantidade')
        // pdf.text(this.horizontal_padding+80, this.vertical_padding, 'Total')
        // pdf.text(this.horizontal_padding+98, this.vertical_padding, 'Total C/Iva')
        // pdf.text(this.horizontal_padding+125, this.vertical_padding, '%Iva')
        // pdf.text(this.horizontal_padding+140, this.vertical_padding, 'Iva')
        // pdf.text(this.horizontal_padding+160, this.vertical_padding, 'Desconto')

        this.vertical_padding+=10
      }
      console.log(reparacao)
      pdf.text(this.horizontal_padding, this.vertical_padding,JSON.stringify(reparacao.id))
      pdf.text(this.horizontal_padding+8, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.price)))
      pdf.text(this.horizontal_padding+20, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.weight)))
      pdf.text(this.horizontal_padding+40, this.vertical_padding, ((reparacao.units.toString())))
      pdf.text(this.horizontal_padding+54, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.quantity.toString())))
      pdf.text(this.horizontal_padding+64, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.total_to_pay)))
      pdf.text(this.horizontal_padding+80, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.total_to_pay_with_tax)))
      pdf.text(this.horizontal_padding+100, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.tax.toString())))
      pdf.text(this.horizontal_padding+112, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.tax_to_pay)))
      pdf.text(this.horizontal_padding+124, this.vertical_padding, JSON.parse(JSON.stringify(reparacao.discount)))
    }

    console.log(this.vertical_padding)

    if (this.vertical_padding>=pdf.pageHeight)
    {
        pdf.addPage();
        this.vertical_padding=10
        this.horizontal_padding=10
        this.cabecalho(pdf)
        this.vertical_padding+=10
    }
    if(this.vertical_padding<88)
    {
      console.log(this.vertical_padding)
      this.vertical_padding=88
      this.faturacao(pdf)
      this.vertical_padding=10
    }
    if(this.vertical_padding >=88){
      pdf.addPage();
      this.vertical_padding=10
      this.cabecalho(pdf)

      this.vertical_padding=88
      this.faturacao(pdf)

    }
  
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



  
