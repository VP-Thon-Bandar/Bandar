import { Component, OnInit, OnChanges } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnChanges {

  constructor() {   }

  ngOnInit() {
    $('#boton-colapsar').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
  }

  ngOnChanges() {
    console.log(localStorage.getItem('userName'))
  }

  enableButtonCollapse(loginOK: boolean) {
    if (loginOK) {
      $('#boton-colapsar').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      });
    }
  }

}
