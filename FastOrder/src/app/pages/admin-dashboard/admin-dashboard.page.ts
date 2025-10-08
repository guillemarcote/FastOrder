import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
  standalone: true,
    imports: [
    IonicModule,      // Contiene todas las etiquetas <ion-*>
    CommonModule,     // Necesario para directivas básicas de Angular
    FormsModule,      // Contiene [(ngModel)]
    RouterModule      // Necesario para routerLink
  ]
})
export class AdminDashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
