import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HallMapComponent } from './hall-map/hall-map.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { DashTableComponent } from './dashboard/dash-table/dash-table.component';
import { DashFormsComponent } from './dashboard/dash-forms/dash-forms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hallmap', component: HallMapComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'emap', component: EventsMapComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: DashHomeComponent},
    {path: 'table', component: DashTableComponent},
    {path: 'forms', component: DashFormsComponent}
  ]}
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
