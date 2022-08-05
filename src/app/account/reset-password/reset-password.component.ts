import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  errorMessage: any;
  successMessage: any;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //---- Reset Pass Form------//
    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Validate(formdata: any) {
    const { newPassword, confirmPassword } = formdata;

    if (newPassword !== confirmPassword) {
      this.errorMessage = 'You are entering the wrong password';
      throw new Error(this.errorMessage);
    }
    return;
  }

  onSubmit() {
    this.loading = true;
    let formdata = this.resetForm.value;
    this.Validate(formdata);
    let userId = this.route.snapshot.paramMap.get('id');
    let token = this.route.snapshot.paramMap.get('token');

    this.authService.resetPassword(userId, token, formdata).subscribe(
      (data) => {
        this.resetForm.reset();
        this.successMessage = data.message;
        this.loading = false;
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(['/login']);
        }, 2000);
      },
      (e) => {
        if (e.error.message) {
          this.errorMessage = e.error.message;
          this.loading = false;
        }
      }
    );
  }
}
