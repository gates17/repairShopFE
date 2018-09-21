//MODULES IMPORT
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//COMPONENTS IMPORT
import { AppComponent } from './app.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';

import { CriarreparacaoComponent } from './criarreparacao/criarreparacao.component';
import { EliminarreparacaoComponent } from './eliminarreparacao/eliminarreparacao.component';
import { AlterarreparacaoComponent } from './alterarreparacao/alterarreparacao.component';
import { DetalhesreparacaoComponent } from './detalhesreparacao/detalhesreparacao.component';

import { CriarclienteComponent } from './criarcliente/criarcliente.component';
import { AlterarclienteComponent } from './alterarcliente/alterarcliente.component';
import { RemoverclienteComponent } from './removercliente/removercliente.component';
import { DetalhesclienteComponent } from './detalhescliente/detalhescliente.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavbarComponent,
    FooternavbarComponent,

    CriarreparacaoComponent,
    EliminarreparacaoComponent,
    AlterarreparacaoComponent,
    DetalhesreparacaoComponent,
    
    CriarclienteComponent,
    AlterarclienteComponent,
    RemoverclienteComponent,
    DetalhesclienteComponent,
    HtmlToPdfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MainnavbarComponent,
    FooternavbarComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }