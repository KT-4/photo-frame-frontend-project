import { Component, OnInit, ViewChild } from '@angular/core';
import { Role } from 'src/app/_models/role';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit(): void {}

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
    this.authService.logout();
  }
}
