import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links!: Array<any>


  constructor() { }

  ngOnInit(): void {
    this.links = new Array()
    this.links.push({
      rota: "vaiPagina",
      textContent: "Página",
      cor: "nav-icon far fa-circle text-success"
    })

    this.links.push({
      rota: "vaiInicio",
      textContent: "Início",
      cor: "nav-icon far fa-circle text-primary"
    })

    this.links.push({
      rota: "vaiOutra",
      textContent: "Outro",
      cor: "nav-icon far fa-circle text-danger"
    })
    this.links.push({
      rota: "property",
      textContent: "Property",
      cor: "nav-icon far fa-circle text-warning"
    })
    this.links.push({
      rota: "event",
      textContent: "Event",
      cor: "nav-icon far fa-circle text-info"
    })
    this.links.push({
      rota: "mao-dupla",
      textContent: "Mão Dupla",
      cor: "nav-icon far fa-circle text-light"
    })
    this.links.push({
      rota: ["receber", "Cristian",19,"Otacilio Costa"],
      textContent: "Receber",
      cor: "nav-icon far fa-circle text-dark"
    })
    this.links.push({
      rota: "enviar",
      textContent: "Enviar",
      cor: "nav-icon far fa-circle text-secondary"
    })
    this.links.push({
      rota: "diretiva",
      textContent: "Diretiva If",
      cor: "nav-icon far fa-circle text-primary"
    })
    this.links.push({
      rota: "diretivaFor",
      textContent: "Diretiva For",
      cor: "nav-icon far fa-circle text-danger"
    })

    //Aqui seria a rota para o Login,mas não o utilizamos pois ja será a tela de entrada
    // this.links.push({
    //   rota: "",
    //   textContent: "Login",
    //   cor: "nav-icon far fa-circle text-danger"
    // })





  }

}
