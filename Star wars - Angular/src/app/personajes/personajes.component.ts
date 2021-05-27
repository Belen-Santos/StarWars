import { Component, OnInit } from '@angular/core';
import { PAJAXService } from "../p-ajax.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public arrayPersonajes: Array<any>;
  public datosPlaneta: string;
  public urlSiguiente: string;
  public urlAnterior: string;
  public datos: Array<any>;


  constructor(private peti: PAJAXService) {
    this.arrayPersonajes = [];
  }

  ngOnInit(): void {
    this.peti.pedirPersonajes().subscribe(datos => {
      console.log("datos --> ", datos);
      this.datos = datos;
      this.arrayPersonajes = datos.results;
      this.urlAnterior = datos.previous;
      this.urlSiguiente = datos.next;
    },
      error => console.log("Error en la petición: ", error))

  }

  mostrarPlaneta(link, e) {
    e.preventDefault();
    console.log("Estoy mostrando el planeta");
    this.datosPlaneta = link;
    this.peti.pedirUrl(link + "?format=json").subscribe(datos => {
      console.log("datos planeta--> ", datos);
      this.datosPlaneta = datos;
    },
      error => console.log("Error en la petición: ", error))

  }

  mostrarSiguiente() {

    this.peti.pedirUrl(this.urlSiguiente).subscribe(datos => {
      console.log("datos --> ", datos);
      this.arrayPersonajes = datos.results;
      this.urlAnterior = datos.previous;
      this.urlSiguiente = datos.next;
    },
      error => console.log("Error en la petición: ", error))

  }

  mostrarAnterior() {

    this.peti.pedirUrl(this.urlAnterior).subscribe(datos => {
      console.log("datos --> ", datos);
      this.arrayPersonajes = datos.results;
      this.urlAnterior = datos.previous;
      this.urlSiguiente = datos.next;
    },
      error => console.log("Error en la petición: ", error))

  }

}
