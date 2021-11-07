import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment';
import { ServerLog } from "../models/server-log";

const URLServer = environment.serverLog;

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(private http: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.http.post(URLServer + '/infra/log', serverLog);
  }

}
