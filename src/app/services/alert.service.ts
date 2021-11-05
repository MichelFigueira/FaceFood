import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alert, AlertType } from '../shared/components/alert/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfterRouteChange = true;

  success(message: string, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  private alert(alertType: AlertType, message: string, keepAfterRouteChange: boolean) {
    this.keepAfterRouteChange = keepAfterRouteChange
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

}
