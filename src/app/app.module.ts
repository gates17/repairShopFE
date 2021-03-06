//MODULES IMPORT
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

//COMPONENTS IMPORT
import { AppComponent } from './app.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';

import { CriarreparacaoComponent } from './reparacao-create/criarreparacao.component';
import { EliminarreparacaoComponent } from './reparacao-delete/eliminarreparacao.component';
import { AlterarreparacaoComponent } from './reparacao-update/alterarreparacao.component';
import { DetalhesreparacaoComponent } from './reparacao-details/detalhesreparacao.component';
import { ReparacaoListComponent } from './reparacao-list/reparacao-list.component';
import { PrintreparacaoComponent } from './printreparacao/printreparacao.component';

import { CriarclienteComponent } from './cliente-create/criarcliente.component';
import { AlterarclienteComponent } from './cliente-update/alterarcliente.component';
import { RemoverclienteComponent } from './cliente-delete/removercliente.component';
import { DetalhesclienteComponent } from './cliente-details/detalhescliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { PrintClienteComponent } from './print-cliente/print-cliente.component';

import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PrintReparacaoService } from './services/print/print-reparacao.service';

import { DatePipe } from '@angular/common'
import { MatSelectModule,MatFormFieldModule, MatInputModule } from '@angular/material';

import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import { ContaCorrenteComponent } from './conta-corrente/conta-corrente.component';
import { ContaCorrenteClienteComponent } from './conta-corrente-cliente/conta-corrente-cliente.component';
import { PrintContaCorrenteClienteComponent } from './print-conta-corrente-cliente/print-conta-corrente-cliente.component';
import { ContaReparacaoComponent } from './conta-reparacao/conta-reparacao.component';
import { PrintContaReparacaoComponent } from './print-conta-reparacao/print-conta-reparacao.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavbarComponent,
    FooternavbarComponent,

    CriarreparacaoComponent,
    EliminarreparacaoComponent,
    AlterarreparacaoComponent,
    DetalhesreparacaoComponent,
    ReparacaoListComponent,
    PrintreparacaoComponent,
    
    CriarclienteComponent,
    AlterarclienteComponent,
    RemoverclienteComponent,
    DetalhesclienteComponent,
    ClienteListComponent,
    PrintClienteComponent,
  
    HtmlToPdfComponent,
  
    SearchComponent,
    SearchResultsComponent,
    ContaCorrenteComponent,
    ContaCorrenteClienteComponent,
    PrintContaCorrenteClienteComponent,
    ContaReparacaoComponent,
    PrintContaReparacaoComponent,    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
  
    BrowserAnimationsModule,
    
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    OverlayModule,
    ObserversModule,
    PlatformModule
  ],

  providers: [
    PrintReparacaoService,
    DatePipe,  
  ],
  bootstrap: [
    AppComponent,
    MainnavbarComponent,
    FooternavbarComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }