import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { IntegrationsPageComponent } from './integrations-page/integrations-page.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  { path: '', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
