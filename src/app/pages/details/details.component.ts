import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
      private route: ActivatedRoute,
      private photoService: PhotoService,
      private router: Router,
      private alertService: AlertService,
      private authService: AuthService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);

    this.photo$.subscribe(() => {}, err => {
      this.router.navigate(['not-found']);
    });
  }

  remove(photoId: number) {
    this.photoService
      .removePhoto(photoId)
      .subscribe(
        () => {
          this.alertService.success("Photo Removed");
          this.router.navigate(['/user', this.authService.getUserName()], { replaceUrl: true });
        },
        err => {
          this.alertService.warning('Could not delete the photo!');
        }
      );
  }

  like(photo: Photo) {
    this.photoService
    .like(photo.id)
    .subscribe(liked => {
      if(liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }

}
