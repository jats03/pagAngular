import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-organigrama',
  imports: [CommonModule, FormsModule],
  templateUrl: './organigrama.component.html',
  styleUrl: './organigrama.component.css'
})
export class OrganigramaComponent {
  organigramas: any;

  mensajeError = "";

  constructor(private apiService: ApiService, public authService: AuthService) {}

  isLoggedIn: boolean = false;

  editando: boolean = false;

  ngOnInit(): void {
    this.editando = false;
    this.isLoggedIn = false;
    this.authService.checkLoginStatus();
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
    this.cargarOrganigrama()
  }

  cargarOrganigrama(): void {
    this.apiService.getDatos("organigrama").subscribe(
      (data) => {
        this.organigramas = data;
      },
      (error) => {
        console.error('Hubo un error al cargar la informacion de la asociacion', error);
      }
    );
  }

  editarInfo(): void {
      this.editando = true; // Habilitar el modo de edición
  }

  guardarEdicion(organigrama: any): void {
    this.apiService.actualizarDatos(`organigrama`, {
        id: 1,
        cargo1: organigrama.cargo1,
        cargo2: organigrama.cargo2,
        cargo3: organigrama.cargo3,
        cargo4: organigrama.cargo4,
        cargo5: organigrama.cargo5,
        cargo6: organigrama.cargo6,
        cargo7: organigrama.cargo7,
        cargo8: organigrama.cargo8,
        cargo9: organigrama.cargo9,
        cargo10: organigrama.cargo10,
        cargo11: organigrama.cargo11
    }).subscribe(
      () => {
        this.editando = false;
        this.cargarOrganigrama();
      },
      (error) => {
        console.error('Error al actualizar el organigrama', error);
      }
    );
  }

  organigramaVacio(): boolean {
    return !(
      this.organigramas.cargo1?.trim() ||
      this.organigramas.cargo2?.trim() ||
      this.organigramas.cargo3?.trim() ||
      this.organigramas.cargo4?.trim() ||
      this.organigramas.cargo5?.trim() ||
      this.organigramas.cargo6?.trim() ||
      this.organigramas.cargo7?.trim() ||
      this.organigramas.cargo8?.trim() ||
      this.organigramas.cargo9?.trim() ||
      this.organigramas.cargo10?.trim() ||
      this.organigramas.cargo11?.trim()
    );
  }


}
