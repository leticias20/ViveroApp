import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PLANTAS } from '../mock-plantas';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})

export class PlantasComponent implements OnInit {

  plantas = PLANTAS;
  selectedPlanta: Planta | undefined;

  constructor() { }

  ngOnInit() {
  }

  onSelect(planta: Planta): void {
    this.selectedPlanta = planta;
  }
}