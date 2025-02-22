import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  password = '';
  errorMessage = '';


  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) {}

  login() {
    this.apiService.login("admin/login", this.usuario,this.password).subscribe(
      (response) => {
        console.log("bien")
          this.authService.saveToken(response);
          this.router.navigate(['inicio']);  // Redirige a la página protegida
      },
      (error) => {
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.'}
    )
    };

}

