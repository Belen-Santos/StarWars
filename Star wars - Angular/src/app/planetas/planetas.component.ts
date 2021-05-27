import { Component, Input, OnInit } from '@angular/core';
import { PAJAXService } from "../p-ajax.service";

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  @Input() planeta: any;
  //public datosPlaneta: Array<any>;

  constructor(private peti: PAJAXService) {
    //this.datosPlaneta = [];
  }

  ngOnInit(): void {

  }


}
