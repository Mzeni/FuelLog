import { Routes } from '@angular/router';
import { NavTabsComponent } from './nav-tabs.component/nav-tabs.component';
import { AddFuelLogComponent } from './add-fuel-log.component/add-fuel-log.component';
import { ListFuelLogComponent } from './list-fuel-log.component/list-fuel-log.component';
import { SettingsComponent } from './settings.component/settings.component';

export const routes: Routes = [
    { path: 'addFuelLog', component: AddFuelLogComponent },
    { path: 'listFuelLog', component: ListFuelLogComponent },
    { path: 'settings', component: SettingsComponent },

    { path: "**", redirectTo: "addFuelLog", pathMatch: "full" },
];
