import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDuplicationPageComponent } from './form-duplication-page.component';

describe('FormDuplicationPageComponent', () => {
  let component: FormDuplicationPageComponent;
  let fixture: ComponentFixture<FormDuplicationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDuplicationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDuplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
