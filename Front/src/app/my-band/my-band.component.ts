import { Component, OnInit } from '@angular/core';
import { Band } from "app/my-band/shared/band";

@Component({
  selector: 'my-band',
  templateUrl: './my-band.component.html',
  styleUrls: ['./my-band.component.css']
})
export class MyBandComponent implements OnInit {

  bands: Band[] = []

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.bands.push(new Band("XXX", "YYY", "ZZZ"))
    }
  }

  ngOnInit() {
  }

}
