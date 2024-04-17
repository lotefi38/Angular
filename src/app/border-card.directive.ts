import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    // à l'initiation de l'attribut on appele la méthode setheight
    this.setHeight(150);
    this.setBorder("#F5F5F5");
   }
@Input('appBorderCard') borderColor: string = '';

@HostListener('mouseenter') onMouseEnter(){
  this.setBorder(this.borderColor || "green")
}
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder("#F5F5F5")

}
  setHeight(height: number){ 
    //this.el est l'element ou se trouve la directive
    this.el.nativeElement.style.heigth = `${height}px`;
  }
  setBorder(color: string){
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }

}
