import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountryViewComponent } from './all-country-view.component';

describe('AllCountryViewComponent', () => {
  let component: AllCountryViewComponent;
  let fixture: ComponentFixture<AllCountryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCountryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
