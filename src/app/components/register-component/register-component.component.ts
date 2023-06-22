import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  nickname: string = '';
  isFormSubmitted: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.isFormSubmitted = true;
    const user = {
      username: this.username,
      password: this.password,
      nickname: this.nickname
    };

    if (!this.username || !this.password || !this.nickname) {
      alert("Faltan campos");
      return;
    }

    if (this.password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    alert("Registro exitoso. ¡Bienvenido!");
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }
}

