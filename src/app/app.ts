import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavTabsComponent } from "./nav-tabs.component/nav-tabs.component";
import { IonRouterOutlet, IonApp } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet, RouterOutlet, NavTabsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'FuelLogApp';
}
