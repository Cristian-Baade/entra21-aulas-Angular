import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { EnviarComponent } from './enviar/enviar.component';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertyComponent } from './property/property.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';

const routes: Routes = [
  { path: "vaiPagina", component: PaginaComponent },
  { path: "vaiInicio", component: InicioComponent },
  { path: "vaiOutra", component: OutroComponent },
  { path: "property", component: PropertyComponent },
  { path: "event", component: EventComponent },
  { path: "mao-dupla", component: MaoDuplaComponent },
  { path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent },
  { path: "enviar", component: EnviarComponent },
  { path: "diretiva", component: DiretivaComponent },
  { path: "diretivaFor", component: DiretivaForComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
