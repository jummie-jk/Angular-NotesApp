import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexityPageComponent } from './complexity-page.component';

describe('ComplexityPageComponent', () => {
  let component: ComplexityPageComponent;
  let fixture: ComponentFixture<ComplexityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
