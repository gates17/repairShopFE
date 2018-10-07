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

import { CriarreparacaoComponent } from './reparacao-create/criarreparacao.component';
import { EliminarreparacaoComponent } from './reparacao-delete/eliminarreparacao.component';
import { AlterarreparacaoComponent } from './reparacao-update/alterarreparacao.component';
import { DetalhesreparacaoComponent } from './reparacao-details/detalhesreparacao.component';

import { CriarclienteComponent } from './cliente-create/criarcliente.component';
import { AlterarclienteComponent } from './cliente-update/alterarcliente.component';
import { RemoverclienteComponent } from './cliente-delete/removercliente.component';
import { DetalhesclienteComponent } from './cliente-details/detalhescliente.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { ReparacaoListComponent } from './reparacao-list/reparacao-list.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PrintreparacaoComponent } from './printreparacao/printreparacao.component';
import { PrintClienteComponent } from './print-cliente/print-cliente.component';

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
    HtmlToPdfComponent,
    ReparacaoListComponent,
    ClienteListComponent,
    SearchComponent,
    SearchResultsComponent,
    PrintreparacaoComponent,
    PrintClienteComponent
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