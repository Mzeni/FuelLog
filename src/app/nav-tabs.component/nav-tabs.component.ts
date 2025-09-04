import { Component } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabs,
  IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  documentTextOutline,
  readerOutline,
  settingsOutline
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-nav-tabs',
  imports: [
    IonButtons,
    IonIcon,
    IonTabBar,
    IonTabs,
    RouterLink
  ],
  standalone: true, 
  templateUrl: './nav-tabs.component.html',
  styleUrl: './nav-tabs.component.css'
})
export class NavTabsComponent {
  constructor() {
    addIcons({
      addCircleOutline,
      documentTextOutline,
      readerOutline,
      settingsOutline
    });
  }

}
