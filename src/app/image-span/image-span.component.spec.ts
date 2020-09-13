import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSpanComponent } from './image-span.component';

describe('ImageSpanComponent', () => {
  let component: ImageSpanComponent;
  let fixture: ComponentFixture<ImageSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
