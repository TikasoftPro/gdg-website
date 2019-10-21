import { Directive, OnInit, ElementRef } from '@angular/core';

import { Sidenav } from 'materialize-css';

@Directive({
  selector: '[gdgSidenav]'
})
export class SidenavDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    Sidenav.init(this.element.nativeElement);
  }
}
