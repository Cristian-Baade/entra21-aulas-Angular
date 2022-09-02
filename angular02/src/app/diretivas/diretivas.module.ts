import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DiretivaComponent,
    DiretivaForComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class DiretivasModule { }
