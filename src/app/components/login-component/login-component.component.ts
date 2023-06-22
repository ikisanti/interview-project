import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
})
export class LoginComponent {
  username: string = ''; // Variable para almacenar el nombre de usuario ingresado
  password: string = ''; // Variable para almacenar la contraseña ingresada
  showPassword: boolean = false; // Variable para controlar la visibilidad de la contraseña
  change: boolean = false; // Variable para controlar el cambio de valor

  constructor(private router: Router, private authService: AuthService) { }

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Función que se ejecuta al enviar el formulario de inicio de sesión
  onSubmit() {
    const storedUser = localStorage.getItem('user'); // Obtener el usuario almacenado en el LocalStorage
    console.log(storedUser);

    if (storedUser) {
      const user = JSON.parse(storedUser);

      // Verificar si las credenciales ingresadas coinciden con el usuario almacenado
      if (this.username === user.username && this.password === user.password) {
        this.authService.setChangeValue(true);
        this.change = true;
        this.router.navigate(['/home']); // Navegar al componente de inicio
      } else {
        alert('Credenciales inválidas');
        this.authService.setChangeValue(false);
      }
    } else {
      alert('No se encontró ningún usuario registrado');
    }
  }
}
