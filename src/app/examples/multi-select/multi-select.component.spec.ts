import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select.component';
import { SharedModule } from '../../shared.module';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';

describe('Multi Select Example', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[SharedModule],
      declarations: [ MultiSelectComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
