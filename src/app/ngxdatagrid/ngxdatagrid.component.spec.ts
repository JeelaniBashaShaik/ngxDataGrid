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
    component.rows = [
      {"userId": 256,"id": 1,"title": "delectus","completed": false},
      {"userId": 89,"id": 2,"title": "quis ut","completed": false},
      {"userId": 64,"id": 3,"title": "fugiat","completed": false}
    ];
    component.columns = [
      {name:"userId"},
      {name:"id"},
      {name:"title"},
      {name:"completed"}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
