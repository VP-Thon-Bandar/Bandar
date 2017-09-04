import { Component, OnInit } from '@angular/core';
import { Band } from "app/my-band/shared/band";

import { MyBandService } from './shared/my-band.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'my-band',
  templateUrl: './my-band.component.html',
  styleUrls: ['./my-band.component.css']
})
export class MyBandComponent implements OnInit {

  band: Band;

  bandToEdit: Band;

  myBandService: MyBandService;

  constructor(myBandService: MyBandService) {
    console.log('pase por aca');

    this.band = new Band('La renga', 'Trueno tierra', 'Rock - Hard rock')
    this.bandToEdit = new Band('La renga', 'Trueno tierra', 'Rock - Hard rock')

    this.band = myBandService.getMyBand().subscribe(response => {
        console.log(response)
      },
      error => {
          console.log(error.text());
      });
  }

  ngOnInit() {
  }

  edit() {
    $('#modal-edit').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%' // Ending top style attribute
    });
  }

  delete() {
    $('#modal-delete').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%' // Ending top style attribute
    });
  }

  confirmDelete() {
    this.band = null
  }

  confirmEdit() {
    this.band.name = this.bandToEdit.name
    this.band.description = this.bandToEdit.description
    this.band.genre = this.bandToEdit.genre
  }
}
