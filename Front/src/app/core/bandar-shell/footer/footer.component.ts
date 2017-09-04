import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'footer-bar',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerOculto: boolean

  constructor() {
    this.footerOculto = false
  }

  ngOnInit() {
  }

  toggleFooter() {
    this.footerOculto = (this.footerOculto === false ? true : false)

    if (this.footerOculto) {
      $('.footer-body').hide('slow');
    } else {
      $('.footer-body').show('slow');
    }
  }

}
