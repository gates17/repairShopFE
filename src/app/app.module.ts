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
import { RepairedTableComponent } from './repaired-table/repaired-table.component';
import { RepairingTableComponent } from './repairing-table/repairing-table.component';
import { CriarreparacaoComponent } from './criarreparacao/criarreparacao.component';
import { EliminarreparacaoComponent } from './eliminarreparacao/eliminarreparacao.component';
import { AlterarreparacaoComponent } from './alterarreparacao/alterarreparacao.component';
import { DetalhesreparacaoComponent } from './detalhesreparacao/detalhesreparacao.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavbarComponent,
    FooternavbarComponent,
    RepairedTableComponent,
    RepairingTableComponent,
    CriarreparacaoComponent,
    EliminarreparacaoComponent,
    AlterarreparacaoComponent,
    DetalhesreparacaoComponent
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