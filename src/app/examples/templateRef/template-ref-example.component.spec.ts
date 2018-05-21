import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefExampleComponent } from './template-ref-example.component';
import { SharedModule } from '../../shared.module';
import { NgxdatagridComponent } from '../../ngxdatagrid/ngxdatagrid.component';

describe('Template Ref Example', () => {
  let component: TemplateRefExampleComponent;
  let fixture: ComponentFixture<TemplateRefExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[SharedModule],
      declarations: [ TemplateRefExampleComponent,NgxdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
