import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    PagesRoutingModule,
    NgbModule,
  ]
})
export class PagesModule { }
