import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from '../models/photo';
import{ GlobalConstants } from '../common/global-constants'
import { PhotoComment } from '../models/photo-comment';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(GlobalConstants.API_URL + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(GlobalConstants.API_URL + '/' + userName + '/photos', { params: params });
  }

  findById(photoId: number) {
    return this.http.get<Photo>(GlobalConstants.API_URL + '/photos/' + photoId);
  }

  getComments(photoId: number) {
      return this.http.get<PhotoComment[]>(
        GlobalConstants.API_URL + '/photos/' + photoId + '/comments');
  }

}
