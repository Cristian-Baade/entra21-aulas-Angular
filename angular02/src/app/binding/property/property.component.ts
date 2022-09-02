import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
//properties

nome:string= "Cristian"
sobreNome:string = "Schauffert"
//sobreNome!:string  O ! impede que inicie a variavel sem valor
idade:number = 19
peso:number = 70.0

enderecoImagem:string = "https://cdn3.emoji.gg/emojis/4562_AlienPls.gif"
google:string = "https://google.com"
alvo:string = "_blank"

  constructor() { }


  ngOnInit(): void {
  }

}
