import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string = "ingresoOperacion";
  descripcionInput:string = "";
  valorInput:number = 0;

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) 
    {}

  ngOnInit(): void {
  }
  
  tipoOperacion(evento:any):void
  {
    this.tipo = evento.target.value;
  }

  agregarValor():void
  {
    if(this.tipo === "ingresoOperacion")
    {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }
    else if(this.tipo == "egresoOperacion")
    {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}
