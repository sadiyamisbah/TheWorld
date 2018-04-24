import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDesignComponent } from './image-design.component';

describe('ImageDesignComponent', () => {
  let component: ImageDesignComponent;
  let fixture: ComponentFixture<ImageDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
