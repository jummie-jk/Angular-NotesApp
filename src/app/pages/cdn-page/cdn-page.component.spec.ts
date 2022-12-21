import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdnPageComponent } from './cdn-page.component';

describe('CdnPageComponent', () => {
  let component: CdnPageComponent;
  let fixture: ComponentFixture<CdnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
