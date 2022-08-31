import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent implements OnInit {

aparece!: boolean
idade!: number

  constructor() { }

  ngOnInit(): void {
    this.aparece = true
  }

alternar(){
  this.aparece=!this.aparece

}

maiorIdade():boolean{
return this.idade>=18

}

}
