import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  {path: '', component: PhonesComponent}
];

export const phoneRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
