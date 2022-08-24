import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { OutroComponent } from './outro/outro.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    InicioComponent,
    OutroComponent,
    PropertyComponent,
    EventComponent,
    MaoDuplaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
