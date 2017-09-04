import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[ocultarOnClick]'
})
export class OcultarDirective {

  estaOculto = false

  constructor() { }

  @HostBinding('class.oculto')
  get estado() {
    return this.estaOculto
  }

  @HostListener('click')
  toggle() {
    this.estaOculto = !this.estaOculto
  }
}
