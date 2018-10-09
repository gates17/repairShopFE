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
 
  public data: any;
  private printer: HtmlToPdfComponent;
  private printSub: any;
  message:any;
  dataToConvert:any;
  reparacaoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date_completed: new FormControl(''),
    price: new FormControl(''),
    budget: new FormControl(''),
    tlf: new FormControl(''),
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
  /*
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout( (  ) => {
      if(this.prs.formData) 
        this.formData.setValue({
          name: this.prs.formData.controls.name.value,
          description: this.prs.formData.controls.description.value,
          date_completed: this.prs.formData.controls.date_completed.value,
          price: this.prs.formData.controls.price.value,
          budget: this.prs.formData.controls.budget.value,
          tlf: this.prs.formData.controls.tlf.value,
          foto: this.prs.formData.controls.foto.value,
          materials: this.prs.formData.controls.materials.value,
          faturado: this.prs.formData.controls.faturado.value});

    },0)


    
  }
*/
  ngOnInit() {
    this.reparacaoForm = this.prs.getData();
    //console.log(this.prs)
    console.log(this.reparacaoForm)
    console.log(this.formData)
    /*
    this.message = this.receiveMessage(event);
    console.log(this.message)

    console.log(this.data)
    */
    this.dataToConvert = document.getElementById('contentToConvert');
    document.getElementById('accoes').style.display="none";
    //document.getElementById('header').style.display="none";
  }

  print(){
    this.captureScreen()
    //this.router.navigate(['/reparacao'])
  }
  
  ngOnDestroy(){
    //this.printSub.unsubscribe()
  }

  receiveMessage($event){
    this.message=$event;
    console.log(this.message)
  }
}
