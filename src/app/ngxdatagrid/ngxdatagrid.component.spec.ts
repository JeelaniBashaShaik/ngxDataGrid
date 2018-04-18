import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxdatagridComponent } from './ngxdatagrid.component';

describe('NgxdatagridComponent', () => {
  let component: NgxdatagridComponent;
  let fixture: ComponentFixture<NgxdatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxdatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
