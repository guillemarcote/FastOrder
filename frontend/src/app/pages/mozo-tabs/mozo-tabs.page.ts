import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mozo-tabs',
  templateUrl: './mozo-tabs.page.html',
  styleUrls: ['./mozo-tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ]
})
export class MozoTabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('aca si entra');
    
  }
  
}
