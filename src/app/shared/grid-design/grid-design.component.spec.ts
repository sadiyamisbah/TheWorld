import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDesignComponent } from './grid-design.component';

describe('GridDesignComponent', () => {
  let component: GridDesignComponent;
  let fixture: ComponentFixture<GridDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
