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


const routes: Routes = [
  
  {path: 'reparacao', component: ReparacaoListComponent },
  {path: 'reparacao/create', component: CriarreparacaoComponent },
  
  {path: 'reparacao/details/:id', component: DetalhesreparacaoComponent },
  {path: 'reparacao/delete/:id', component: EliminarreparacaoComponent },
  {path: 'reparacao/update/:id', component: AlterarreparacaoComponent },

  {path: 'cliente', component: ClienteListComponent },
  {path: 'cliente/create', component: CriarclienteComponent },
  
  {path: 'cliente/details/:id', component: DetalhesclienteComponent },
  {path: 'cliente/delete/:id', component: RemoverclienteComponent },
  {path: 'cliente/update/:id', component: AlterarclienteComponent },

  {path: 'print', component: HtmlToPdfComponent },

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

  HtmlToPdfComponent
]
