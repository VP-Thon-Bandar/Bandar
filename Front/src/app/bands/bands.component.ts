import { Component, OnInit } from '@angular/core';
import { Band } from "app/bands/shared/band";

@Component({
  selector: 'bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

  bands: Band[] = []

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.bands.push(new Band("XXX", "YYY", "ZZZ"))
    }
  }

  ngOnInit() {
  }

}
