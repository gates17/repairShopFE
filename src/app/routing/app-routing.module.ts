import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components

//reparacao
import { CriarreparacaoComponent } from '../reparacao-create/criarreparacao.component';
import { EliminarreparacaoComponent } from '../reparacao-delete/eliminarreparacao.component';
import { AlterarreparacaoComponent } from '../reparacao-update/alterarreparacao.component';
import { DetalhesreparacaoComponent } from '../reparacao-details/detalhesreparacao.component';
import { ReparacaoListComponent } from '../reparacao-list/reparacao-list.component';

//cliente
import { CriarclienteComponent } from '../cliente-create/criarcliente.component';
import { AlterarclienteComponent } from '../cliente-update/alterarcliente.component';
import { RemoverclienteComponent } from '../cliente-delete/removercliente.component';
import { DetalhesclienteComponent } from '../cliente-details/detalhescliente.component';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';

//html to pdf
import {HtmlToPdfComponent} from '../html-to-pdf/html-to-pdf.component';

//services

//reparacao
import { AlterarreparacaoserviceService } from '../services/reparacao/alterarreparacao/alterarreparacaoservice.service';
import { CriarreparacaoserviceService } from '../services/reparacao/criarreparacao/criarreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/reparacao/eliminarreparacao/eliminarreparacaoservice.service';
import { DetalhesreparacaoserviceService } from '../services/reparacao/detalhesreparacao/detalhesreparacaoservice.service';


//cliente
import { AlterarService } from '../services/cliente/alterarservice/alterar.service';
import { CriarService } from '../services/cliente/criarservice/criar.service';
import { ConsultarService } from '../services/cliente/consultarservice/consultar.service';
import { RemoverService } from '../services/cliente/removerservice/remover.service';

//pesquisa
import { SearchResultsComponent } from '../search-results/search-results.component';
import { PrintClienteComponent } from '../print-cliente/print-cliente.component';
import { PrintreparacaoComponent } from '../printreparacao/printreparacao.component';
import { AppComponent } from '../app.component';

//Conta corrente
import { ContaCorrenteComponent } from '../conta-corrente/conta-corrente.component';
import { ContaCorrenteClienteComponent } from '../conta-corrente-cliente/conta-corrente-cliente.component';
import { PrintContaCorrenteClienteComponent } from '../print-conta-corrente-cliente/print-conta-corrente-cliente.component';
import { ContaReparacaoComponent } from '../conta-reparacao/conta-reparacao.component';
const routes: Routes = [
  
  {path: 'reparacao', component: ReparacaoListComponent },
  {path: 'reparacao/create', component: CriarreparacaoComponent },
  {path: 'reparacao/print', component: PrintreparacaoComponent},
  
  {path: 'reparacao/details/:id', component: DetalhesreparacaoComponent },
  {path: 'reparacao/delete/:id', component: EliminarreparacaoComponent },
  {path: 'reparacao/update/:id', component: AlterarreparacaoComponent },

  {path: 'reparacao/conta', component: ContaReparacaoComponent },
  //{path: 'reparacao/conta/list', component: ContaReparacaoComponent },

  {path: 'cliente', component: ClienteListComponent },
  {path: 'cliente/create', component: CriarclienteComponent },
  {path: 'cliente/print', component: PrintClienteComponent},
  
  {path: 'cliente/details/:id', component: DetalhesclienteComponent },
  {path: 'cliente/delete/:id', component: RemoverclienteComponent },
  {path: 'cliente/update/:id', component: AlterarclienteComponent },

  {path: 'cliente/details/:id/conta', component: ContaCorrenteClienteComponent },
  {path: 'cliente/details/:id/conta/print', component: PrintContaCorrenteClienteComponent },


  {path: 'search', component: SearchResultsComponent },
  {path: 'print', component: HtmlToPdfComponent },

  {path: '', component: ContaCorrenteComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
   
    AlterarreparacaoserviceService,
    CriarreparacaoserviceService,
    DetalhesreparacaoserviceService,
    EliminarreparacaoserviceService,
 
    AlterarService,
    CriarService,
    ConsultarService,
    RemoverService
   
  ]
})
export class AppRoutingModule { }

export const routingComponents = [
  AppComponent,
  
  AlterarreparacaoComponent,
  CriarreparacaoComponent,
  DetalhesreparacaoComponent,
  EliminarreparacaoComponent,
  ReparacaoListComponent,

  AlterarclienteComponent,
  CriarclienteComponent,
  DetalhesclienteComponent,
  RemoverclienteComponent,
  ClienteListComponent,

  PrintreparacaoComponent,
  PrintClienteComponent,
  PrintContaCorrenteClienteComponent,

  SearchResultsComponent,

  HtmlToPdfComponent,
  ContaCorrenteComponent,
  ContaCorrenteClienteComponent,
  ContaReparacaoComponent
]
