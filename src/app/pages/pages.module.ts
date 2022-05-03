import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HmtlPageComponent } from './hmtl-page/hmtl-page.component';
import { IntegrationsPageComponent } from './integrations-page/integrations-page.component';


@NgModule({
  declarations: [
    PagesComponent,
    HmtlPageComponent,
    IntegrationsPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
