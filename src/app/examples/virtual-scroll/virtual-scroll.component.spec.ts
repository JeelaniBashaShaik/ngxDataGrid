import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollComponent } from './virtual-scroll.component';
import { SharedModule } from '../../shared.module';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';

describe('Virtual Scroll Example', () => {
  let component: VirtualScrollComponent;
  let fixture: ComponentFixture<VirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[SharedModule],
      declarations: [ VirtualScrollComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
