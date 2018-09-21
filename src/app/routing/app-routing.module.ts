import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components

//reparacao
import { AlterarreparacaoComponent } from '../alterarreparacao/alterarreparacao.component';
import { CriarreparacaoComponent } from '../criarreparacao/criarreparacao.component';
import { DetalhesreparacaoComponent } from '../detalhesreparacao/detalhesreparacao.component';
import { EliminarreparacaoComponent } from '../eliminarreparacao/eliminarreparacao.component';

//cliente
import { AlterarclienteComponent } from '../alterarcliente/alterarcliente.component';
import { CriarclienteComponent } from '../criarcliente/criarcliente.component';
import { DetalhesclienteComponent } from '../detalhescliente/detalhescliente.component';
import { RemoverclienteComponent } from '../removercliente/removercliente.component';

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
  
  {path: 'reparacao', component: DetalhesreparacaoComponent },
  {path: 'reparacao/create', component: CriarreparacaoComponent },
  
  {path: 'reparacao/details/:id', component: DetalhesreparacaoComponent },
  {path: 'reparacao/delete/:id', component: EliminarreparacaoComponent },
  {path: 'reparacao/update/:id', component: AlterarreparacaoComponent },

  {path: 'cliente', component: DetalhesclienteComponent },
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

  AlterarclienteComponent,
  CriarclienteComponent,
  DetalhesclienteComponent,
  RemoverclienteComponent,

  HtmlToPdfComponent
]
