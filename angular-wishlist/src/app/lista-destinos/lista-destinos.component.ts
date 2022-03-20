import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje[];

  constructor() { 
  	this.destinos = [];
  }

	agregado(d: DestinoViaje){
    this.destinos.push(d);
    return false; //no recarga la pagina
  }

  elegido(d: DestinoViaje){
    this.destinos.forEach(function (x) {x.setSelected(false)});
    d.setSelected(true);
  }

  ngOnInit() {
  }


}
