import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private sidenavService: SidenavService) {}

  ngOnInit() {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  onLoggedout() {
    localStorage.clear();
    // refresh to reset service data
    window.location.reload();
    // redirect
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    if (localStorage.getItem('isLoggedin') === 'true') {
      return true;
    }
    return false;
  }
}
