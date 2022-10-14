import { IntegrationsPageComponent } from './pages/integrations-page/integrations-page.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { Testing2Component } from './pages/testing2/testing2.component';
import { EditPageComponent } from 'src/app/pages/testing-page/edit-page/edit-page.component';
import { ViewDetailPageComponent } from 'src/app/pages/testing-page/view-detail-page/view-detail-page.component';
import { CreateNewComponent } from './pages/testing-page/create-new/create-new.component';


const routes: Routes = [
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: PagesComponent},
  {path: 'pages/testing', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: TestingPageComponent},
  {path: 'pages/integrations', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: IntegrationsPageComponent},
  {path: 'pages/testing2', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: Testing2Component},
  { path: 'pages/testing/edit-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: EditPageComponent },
  { path: 'pages/testing/view-detail-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: ViewDetailPageComponent },
  { path: 'pages/testing/create-new', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: CreateNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
