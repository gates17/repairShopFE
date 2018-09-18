import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components
import { RepairingTableComponent } from '../repairing-table/repairing-table.component';
import { RepairedTableComponent } from '../repaired-table/repaired-table.component';
import { AlterarreparacaoComponent } from '../alterarreparacao/alterarreparacao.component';
import { CriarreparacaoComponent } from '../criarreparacao/criarreparacao.component';
import { DetalhesreparacaoComponent } from '../detalhesreparacao/detalhesreparacao.component';
import { EliminarreparacaoComponent } from '../eliminarreparacao/eliminarreparacao.component';
//services
import { RepairedService } from '../services/repaired/repaired.service';
import { RepairingService } from '../services/repairing/repairing.service';
import { AlterarreparacaoserviceService } from '../services/alterarreparacao/alterarreparacaoservice.service';
import { CriarreparacaoserviceService } from '../services/criarreparacao/criarreparacaoservice.service';
import { EliminarreparacaoserviceService } from '../services/eliminarreparacao/eliminarreparacaoservice.service';
import { DetalhesreparacaoserviceService } from '../services/detalhesreparacao/detalhesreparacaoservice.service';

const routes: Routes = [
  {path: 'repaired', component: RepairedTableComponent },
  {path: 'repairing', component: RepairingTableComponent },
  {path: 'reparacao', component: DetalhesreparacaoComponent },
  {path: 'reparacao/create', component: CriarreparacaoComponent },
  
  {path: 'reparacao/details/:id', component: DetalhesreparacaoComponent },
  {path: 'reparacao/delete/:id', component: EliminarreparacaoComponent },
  {path: 'reparacao/update/:id', component: AlterarreparacaoComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
    RepairedService,
    RepairingService,
    AlterarreparacaoserviceService,
    CriarreparacaoserviceService,
    DetalhesreparacaoserviceService,
    EliminarreparacaoserviceService
  ]
})
export class AppRoutingModule { }

export const routingComponents = [
  RepairedTableComponent,
  RepairingTableComponent,
  AlterarreparacaoComponent,
  CriarreparacaoComponent,
  DetalhesreparacaoComponent,
  EliminarreparacaoComponent
  
]
