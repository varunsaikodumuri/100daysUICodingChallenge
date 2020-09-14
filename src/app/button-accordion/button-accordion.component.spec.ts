import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAccordionComponent } from './button-accordion.component';

describe('ButtonAccordionComponent', () => {
  let component: ButtonAccordionComponent;
  let fixture: ComponentFixture<ButtonAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
