import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

import { GlobalConstants } from './../../common/global-constants';
import { User } from 'src/app/auth/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  checkUserName(userName: string) {
    return this.http.get(GlobalConstants.API_URL + '/user/exists/' + userName);
  }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control
      .valueChanges
      .pipe(debounceTime(300))
      .pipe(switchMap(userName =>
        this.checkUserName(userName)
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    }
  }

  signUp(newUser: User) {
    return this.http.post(GlobalConstants.API_URL + '/user/signup', newUser);
  }

}
