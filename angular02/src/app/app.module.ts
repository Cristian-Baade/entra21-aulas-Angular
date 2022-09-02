import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { OutroComponent } from './outro/outro.component';
import { PropertyComponent } from './binding/property/property.component';
import { EventComponent } from './binding/event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaComponent } from './diretivas/diretiva/diretiva.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';
import { DiretivasModule } from './diretivas/diretivas.module';
import { BindingModule } from './binding/binding.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    InicioComponent,
    OutroComponent,
    HeaderComponent,
    MenuComponent,
    ReceberDadosComponent,
    EnviarComponent,
    LoginComponent
  ],
  imports: [
    BindingModule,
    DiretivasModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
