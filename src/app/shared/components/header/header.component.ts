import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private router: Router) {

      this.user$ = authService.getUser();

    }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
