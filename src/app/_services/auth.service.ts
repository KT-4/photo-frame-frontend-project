import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject!: BehaviorSubject<any>;
  public user!: Observable<User>;

  constructor(private httpClient: HttpClient, private router: Router) {
    let userData: any = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<User>(JSON.parse(userData));

    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }
  //------Login User---------//
  login(email: string, password: string) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  //-----logout user-----//
  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  //-----Forgot Password-----//
  forgotPassword(data: any) {
    return this.httpClient.post<any>(
      `${environment.apiUrl}/auth/forgot-password`,
      data
    );
  }
  //-----reset Password--------//
  resetPassword(userId: any, token: any, data: any) {
    return this.httpClient.post<any>(
      `${environment.apiUrl}/auth/reset-password/${userId}/${token}`,
      data
    );
  }
}
