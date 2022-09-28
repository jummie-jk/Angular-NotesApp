import { IntegrationsPageComponent } from './pages/integrations-page/integrations-page.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { Testing2Component } from './pages/testing2/testing2.component';

const routes: Routes = [
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: PagesComponent},
  {path: 'pages/testing', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: TestingPageComponent},
  {path: 'pages/integrations', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: IntegrationsPageComponent},
  {path: 'pages/testing2', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: Testing2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
