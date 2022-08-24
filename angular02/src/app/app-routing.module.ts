import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  {path: "vaiPagina",component: PaginaComponent },
{path: "vaiInicio",component:InicioComponent },
{path: "vaiOutra", component: OutroComponent},
{path: "property", component: PropertyComponent},
{path: "event", component: EventComponent},
{path: "mao-dupla", component: MaoDuplaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
