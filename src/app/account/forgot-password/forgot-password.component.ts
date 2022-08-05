import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  errorMessage: any;
  successMessage: any;
  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    this.authService.forgotPassword(form.value).subscribe(
      (data) => {
        this.forgotForm.reset();
        this.successMessage = data.message;
        this.loading = false;
      },
      (e) => {
        this.errorMessage = e.error.message;
        this.loading = false;
      }
    );
  }
}
