import { Component, OnInit } from '@angular/core';

import { Band } from './../shared/band';

@Component({
  selector: 'band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  band: Band

  constructor() {
    this.band = new Band('La renga', 'trueno tierra', 'rock')
  }

  ngOnInit() {
  }

}
