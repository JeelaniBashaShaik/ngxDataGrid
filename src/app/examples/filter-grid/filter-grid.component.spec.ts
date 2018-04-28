import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGridComponent } from './filter-grid.component';

describe('FilterGridComponent', () => {
  let component: FilterGridComponent;
  let fixture: ComponentFixture<FilterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
