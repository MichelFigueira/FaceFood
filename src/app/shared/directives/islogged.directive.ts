import { AuthService } from 'src/app/services/auth.service';
import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[IsLogged]'
})
export class IsLoggedDirective implements OnInit {

  @Input() userId: number;

  currentDisplay: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  ngOnInit() : void {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

    this.authService.getUser().subscribe(user => {
      if(user) {
        this.renderer.setStyle(this.element.nativeElement, 'display', this.currentDisplay);
      } else {
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }

}
