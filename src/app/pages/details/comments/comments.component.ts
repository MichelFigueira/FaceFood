import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from 'src/app/models/photo-comment';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>;
  commentForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);

    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  save() {
    const comment = this.commentForm.get('comment')?.value as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
          this.commentForm.reset();
      }));
  }

}
