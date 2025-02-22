import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

    isLoggedIn: boolean = false;

    constructor(public authService: AuthService) {}

    ngOnInit() {
      console.log("ngOnInit [Header]")
      this.authService.checkLoginStatus();
      this.authService.isLoggedIn().subscribe(status => {
        this.isLoggedIn = status;
      });
      console.log("ngOnInit - " + this.isLoggedIn);
    }

    logout() {
      console.log("LOGOUT");
      this.authService.logout();
      this.isLoggedIn = false;
      window.location.reload();
    }

}
