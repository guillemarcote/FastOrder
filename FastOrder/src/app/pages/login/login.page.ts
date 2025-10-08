import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- ¡IMPORTANTE para (ngModel)!
import { IonicModule } from '@ionic/angular'; // <-- ¡IMPORTANTE para todas las etiquetas <ion-*>!
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,      // Contiene todas las etiquetas <ion-*>
    CommonModule,     // Necesario para directivas básicas de Angular
    FormsModule,      // Contiene [(ngModel)]
    RouterModule      // Necesario para routerLink
  ]
})
export class LoginPage implements OnInit {

  usuario = {
    username: '',
    password: ''
  };

  // El constructor debe tener el Router para la navegación
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Lógica de navegación simulada
  iniciarSesion() {
    console.log('Intentando iniciar sesión con:', this.usuario);

    // En un proyecto real, aquí harías una llamada HTTP al backend.
    
    // Si el login es exitoso:
    // Navegamos a la siguiente pantalla (Image 2: Selección de Mesa)
    this.router.navigateByUrl('/table-selection');
  }

  togglePasswordVisibility() {
    // Aquí puedes añadir lógica para cambiar el tipo de input de 'password' a 'text'
    console.log('Toggle password visibility');
  }

}