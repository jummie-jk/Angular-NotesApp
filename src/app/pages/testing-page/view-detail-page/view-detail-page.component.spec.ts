import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailPageComponent } from './view-detail-page.component';

describe('ViewDetailPageComponent', () => {
  let component: ViewDetailPageComponent;
  let fixture: ComponentFixture<ViewDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
