import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PlatformDetectorService } from 'src/app/services/platform-detector.service';
import { SignUpService } from '../../../services/signup.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ] ],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)] ],
      userName: ['', [ Validators.required, Validators.pattern(/^[a-z0-9_\-]+$/), Validators.minLength(2), Validators.maxLength(30)], this.signUpService.checkUserNameTaken() ],
      password: ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(14)] ]
    });
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
    this.cdRef.detectChanges();
  }

  signUp() {
    const User = this.signupForm.getRawValue() as User;
    this.signUpService
        .signUp(User)
        .subscribe(
            () => this.router.navigate([''])
        );
  }

}
