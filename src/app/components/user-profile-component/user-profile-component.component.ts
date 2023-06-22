import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
})
export class UserProfileComponent {
  user: any;
  additionalData = {
    country: '',
    address: ''
  };
  complementaryData: any;

  constructor() {
    //! Obtiene los datos del localStorage
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : {};

    //! Obtiene los datos complementarios del localStorage
    const complementaryData = localStorage.getItem('complementaryData');
    this.complementaryData = complementaryData ? JSON.parse(complementaryData) : {};
  }

  saveAdditionalData() {
    //! Combina los datos del usuario y los datos complementarios
    this.complementaryData = {
      ...this.user,
      ...this.additionalData
    };

    //! Almacena los datos complementarios en el localStorage
    localStorage.setItem('complementaryData', JSON.stringify(this.complementaryData));
  }
}
