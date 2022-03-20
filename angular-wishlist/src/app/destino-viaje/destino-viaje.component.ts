import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {


  @Input() destino : DestinoViaje;
  @Input('idx') position : number;
  /*
  Este componente en lista destinos <app-destino-viaje></app-destino-viaje>
  se renderiza con esta clase. Al renderizar esta generando un componente ficticio en html
  que necesita la clase col-md-4, con esta directiva se le agrega.
  Cuando se renderiza genera un componente app-destino-viaje class="col-md-4"
  */
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;
  constructor() {
  	this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }

}
