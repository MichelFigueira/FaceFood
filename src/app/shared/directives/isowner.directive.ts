import { AuthService } from 'src/app/services/auth.service';
import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[IsOwner]'
})
export class IsOwnerDirective implements OnInit {

  @Input() ownerId: number;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  ngOnInit() : void {
    this.authService
      .getUser()
      .subscribe(user => {
        if(!user || user.id != this.ownerId)
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      });
  }

}

