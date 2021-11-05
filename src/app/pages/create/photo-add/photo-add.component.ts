import { HttpResponse } from '@angular/common/http';
import { AlertService } from './../../../services/alert.service';
import { PhotoAddService } from '../../../services/photo-add.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoAddService: PhotoAddService,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoAddService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() =>
        this.router.navigate(['/user', this.authService.getUserName()])
      ))
      .subscribe((event: HttpEvent<any>) => {
        if(event.type == HttpEventType.UploadProgress && event.total) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if(event instanceof HttpResponse) {
          this.alertService.success('Upload complete', true);
          this.router.navigate(['/user', this.authService.getUserName()]);
        }
      },
      err => {
        console.log(err);
        this.alertService.danger('Upload error!');
      });

  }

  onChange(target : any) {
    if(target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files
      if (files) {
        this.file = files[0]
        const reader = new FileReader();
        reader.onload = (event: any) => this.preview = event.target.result;
        reader.readAsDataURL(this.file);
      }
    }
  }

}
