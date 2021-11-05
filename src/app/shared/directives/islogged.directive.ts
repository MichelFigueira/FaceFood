import { AuthService } from 'src/app/services/auth.service';
import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[IsLogged]'
})
export class IsLoggedDirective implements OnInit {

  @Input() userId: number;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  ngOnInit() : void {
    !this.authService.isLogged()
      && this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }

}
