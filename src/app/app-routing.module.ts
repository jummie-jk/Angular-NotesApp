import { IntegrationsPageComponent } from './pages/integrations-page/integrations-page.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmtlPageComponent } from './pages/hmtl-page/hmtl-page.component';

const routes: Routes = [
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: PagesComponent},
  {path: 'pages/html', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: HmtlPageComponent},
  {path: 'pages/integrations', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: IntegrationsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
