import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectComponent } from './single-select.component';
import { SharedModule } from '../../shared.module';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';

describe('Single Select Example', () => {
  let component: SingleSelectComponent;
  let fixture: ComponentFixture<SingleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[SharedModule],
      declarations: [ SingleSelectComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
