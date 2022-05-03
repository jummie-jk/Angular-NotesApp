import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtlPageComponent } from './hmtl-page.component';

describe('HmtlPageComponent', () => {
  let component: HmtlPageComponent;
  let fixture: ComponentFixture<HmtlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmtlPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmtlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
