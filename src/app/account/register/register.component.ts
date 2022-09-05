import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  successMessage!: any;
  errorMessage: any;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.loading = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.register(this.registerForm.value).subscribe(
      (data: any) => {
        this.registerForm.reset();
        this.successMessage = 'Successfully Registerd';
        this.loading = false;
        this.router.navigate(['/login']);
        
      },
      (error: any) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      }
    );
    this.registerForm.reset();
  }
}
