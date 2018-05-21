import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWidthComponent } from './custom-width.component';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';
import { SharedModule } from '../../shared.module';

describe('Custom Width Example', () => {
  let component: CustomWidthComponent;
  let fixture: ComponentFixture<CustomWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ CustomWidthComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
