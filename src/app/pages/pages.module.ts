
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IntegrationsPageComponent } from './integrations-page/integrations-page.component';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    PagesComponent,
    TestingPageComponent,
    IntegrationsPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    InMemoryWebApiModule,
  ]
})
export class PagesModule { }
