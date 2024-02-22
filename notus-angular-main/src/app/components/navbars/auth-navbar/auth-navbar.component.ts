import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  showNavbar = false;LandingPage = false;

  constructor(private router: Router) {}


  ngOnInit(): void {
    const url = this.router.url;
    this.showNavbar = !(url.includes('/login') || url.includes('/register'));
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
