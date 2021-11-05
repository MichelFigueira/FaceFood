import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.getPhotos();
  }

  getPhotos() {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUserPaginated(userName, 1).subscribe(photos => this.photos = photos);
  }

  load() {
    this.photoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos.push(...photos);
      if(!photos.length) this.hasMore = false;
    });
  }

}
