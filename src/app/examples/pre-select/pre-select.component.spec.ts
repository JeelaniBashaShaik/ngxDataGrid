import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSelectComponent } from './pre-select.component';

describe('PreSelectComponent', () => {
  let component: PreSelectComponent;
  let fixture: ComponentFixture<PreSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
