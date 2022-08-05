import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  // ------Register User-----//
  register(user: User) {
    return this.httpClient.post<User>(
      `${environment.apiUrl}/auth/register`,
      user
    );
  }

  userProfile() {
    return this.httpClient.get<User>(`${environment.apiUrl}/user/profile`);
  }
}
