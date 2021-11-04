import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { GlobalConstants } from '../common/global-constants';
import { TokenService } from './token.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User>(null!);
  private userName: string;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) {
        this.tokenService.hasToken() && this.decodeAndNotify();
  }

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        GlobalConstants.API_URL + '/user/login',
        { userName, password },
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.setToken(authToken!);
      }))
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token!) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null!);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }

}
