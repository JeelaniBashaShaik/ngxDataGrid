import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExampleComponent } from './basic-example.component';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';
import { SharedModule } from '../../shared.module';

describe('Basic Example Component', () => {
  let component: BasicExampleComponent;
  let fixture: ComponentFixture<BasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ BasicExampleComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
