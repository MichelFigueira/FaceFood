import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoComment } from 'src/app/models/photo-comment';

import { Photo } from '../../../models/photo';
import { TimelineService } from '../../../services/timeline.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  comments$: Observable<PhotoComment[]>;

  constructor(
      private route: ActivatedRoute,
      private timelineService: TimelineService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.timelineService.findById(photoId)
    this.comments$ = this.timelineService.getComments(photoId);
  }

}
