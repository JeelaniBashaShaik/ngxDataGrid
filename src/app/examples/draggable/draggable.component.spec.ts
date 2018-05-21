import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableComponent } from './draggable.component';
import { SharedModule } from '../../shared.module';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';

describe('Draggable Example', () => {
  let component: DraggableComponent;
  let fixture: ComponentFixture<DraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ DraggableComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
