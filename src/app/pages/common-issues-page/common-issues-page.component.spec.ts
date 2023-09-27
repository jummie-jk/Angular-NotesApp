import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonIssuesPageComponent } from './common-issues-page.component';

describe('CommonIssuesPageComponent', () => {
  let component: CommonIssuesPageComponent;
  let fixture: ComponentFixture<CommonIssuesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonIssuesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonIssuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
