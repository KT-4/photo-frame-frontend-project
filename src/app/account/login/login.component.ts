import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: any;
  successMessage: any;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    //----- Login Form -----//
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loading = true;
    if (this.loginForm.invalid) {
      return;
    }

    let email = this.f['email'].value;
    let password = this.f['password'].value;

    this.authService
      .login(email, password)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          this.loading = false;
        },
      });

    this.loginForm.reset();
  }
}
