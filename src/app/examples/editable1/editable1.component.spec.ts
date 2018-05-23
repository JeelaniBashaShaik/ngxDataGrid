import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Editable1Component } from './editable1.component';

describe('Editable1Component', () => {
  let component: Editable1Component;
  let fixture: ComponentFixture<Editable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
