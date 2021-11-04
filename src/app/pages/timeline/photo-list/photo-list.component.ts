import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineService } from '../../../services/timeline.service';

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
    private timelineService: TimelineService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.getPhotos();
  }

  getPhotos() {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.timelineService.listFromUserPaginated(userName, 1).subscribe(photos => this.photos = photos);
  }

  load() {
    this.timelineService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos.push(...photos);
      if(!photos.length) this.hasMore = false;
    });
  }

}
