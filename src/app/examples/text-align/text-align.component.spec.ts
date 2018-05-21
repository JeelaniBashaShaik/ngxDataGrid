import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlignComponent } from './text-align.component';
import { SharedModule } from '../../shared.module';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';

describe('Text Align Example', () => {
  let component: TextAlignComponent;
  let fixture: ComponentFixture<TextAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[SharedModule],
      declarations: [ TextAlignComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
