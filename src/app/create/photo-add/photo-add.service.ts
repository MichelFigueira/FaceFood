import { GlobalConstants } from './../../common/global-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoAddService {

  constructor(private http: HttpClient) {}

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();

    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(GlobalConstants.API_URL + '/photos/upload', formData);
  }

}
