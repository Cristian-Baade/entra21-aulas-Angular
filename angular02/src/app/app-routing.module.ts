import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { DiretivaComponent } from './diretivas/diretiva/diretiva.component';
import { EnviarComponent } from './enviar/enviar.component';
import { EventComponent } from './binding/event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertyComponent } from './binding/property/property.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [
  { path: "vaiPagina", component: PaginaComponent, canActivate:[SegurancaService] },
  { path: "vaiInicio", component: InicioComponent, canActivate:[SegurancaService] },
  { path: "vaiOutra", component: OutroComponent, canActivate:[SegurancaService] },
  { path: "property", component: PropertyComponent, canActivate:[SegurancaService] },
  { path: "event", component: EventComponent, canActivate:[SegurancaService] },
  { path: "mao-dupla", component: MaoDuplaComponent, canActivate:[SegurancaService] },
  { path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent, canActivate:[SegurancaService] },
  { path: "enviar", component: EnviarComponent, canActivate:[SegurancaService] },
  { path: "diretiva", component: DiretivaComponent, canActivate:[SegurancaService] },
  { path: "diretivaFor", component: DiretivaForComponent, canActivate:[SegurancaService] },
  { path: "", component: LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
