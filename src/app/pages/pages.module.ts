
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IntegrationsPageComponent } from './integrations-page/integrations-page.component';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Testing2Component } from './testing2/testing2.component';
import { EditPageComponent } from './testing-page/edit-page/edit-page.component';
import { ViewDetailPageComponent } from './testing-page/view-detail-page/view-detail-page.component';
import { CreateNewComponent } from './testing-page/create-new/create-new.component';
import { FiltersPageComponent } from './filters-page/filters-page.component';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { FormDuplicationPageComponent } from './form-duplication-page/form-duplication-page.component';
import { CdnPageComponent } from './cdn-page/cdn-page.component';
import { ComplexityPageComponent } from './complexity-page/complexity-page.component';


@NgModule({
  declarations: [
    PagesComponent,
    TestingPageComponent,
    IntegrationsPageComponent,
    Testing2Component,
    EditPageComponent,
    ViewDetailPageComponent,
    CreateNewComponent,
    FiltersPageComponent,
    RoutingPageComponent,
    FormDuplicationPageComponent,
    CdnPageComponent,
    ComplexityPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class PagesModule { }
