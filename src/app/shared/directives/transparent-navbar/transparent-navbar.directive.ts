import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[gdgTransparentNavbar]'
})
export class TransparentNavbarDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'top-section');
  }

  @HostListener('window:scroll')
  onWindowsScroll(): void {
    const range = 300;
    const banner = this.elementRef.nativeElement;
    const scrollTop = window.scrollY;
    const height = banner.offsetHeight;
    const offset = height / 1.1;
    const bannerOpacity = 1 - (scrollTop - offset + range) / range;

    banner.style.opacity = bannerOpacity.toString();

    if (bannerOpacity > 1) {
      banner.style.opacity = '1';
    } else if (bannerOpacity < 0) {
      banner.style.opacity = '0';
    }
  }
}
