import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWindowSroll]'
})
export class WindowSrollDirective {


  constructor(private el: ElementRef) { }
  @HostBinding('class.click-style') isRed = true;
  @HostBinding('class.click-bg') custNav = false;
  @HostListener('window:scroll') novingOn() {
    const sss = document.getElementById('toggleLabel');
    //  console.log(sss.offsetTop);
    if (window.scrollY > 50) {
      //  console.log();


      this.isRed = false;
      this.custNav = true;

    } else {
      this.isRed = true;
      this.custNav = false;
    }


  }



}
