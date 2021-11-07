import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

import { Photo } from '../models/photo';
import { PhotoComment } from '../models/photo-comment';
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(API + '/' + userName + '/photosc');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(API + '/' + userName + '/photos', { params: params });
  }

  findById(photoId: number) {
    return this.http.get<Photo>(API + '/photos/' + photoId);
  }

  getComments(photoId: number) {
      return this.http.get<PhotoComment[]>(
        API + '/photos/' + photoId + '/comments');
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(
      API + '/photos/' + photoId + '/comments', { commentText });
  }

  removePhoto(photoId: number) {
    return this.http.delete(API + '/photos/' + photoId);
  }

  like(photoId: number) {
    return this.http.post(
      API + '/photos/' + photoId +  '/like', {}, {observe: 'response'}
    )
    .pipe(map(res => true))
    .pipe(catchError(err => {
        return err.status == '304' ? of(false) : throwError(err);
    }));
  }

}