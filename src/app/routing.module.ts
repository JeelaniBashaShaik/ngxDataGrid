import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxdatagridComponent } from './ngxdatagrid/ngxdatagrid.component';
import { AppComponent } from './app.component';
import { DocComponent } from './doc/doc.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { BasicExampleComponent } from './examples/basic/basic-example.component';
import { TemplateRefExampleComponent } from './examples/templateRef/template-ref-example.component';
import { MultiSelectComponent } from './examples/multi-select/multi-select.component';
import { DraggableComponent } from './examples/draggable/draggable.component';
import { EditableComponent } from './examples/editable/editable.component';
import { FilterGridComponent } from './examples/filter-grid/filter-grid.component';
import { VirtualScrollComponent } from './examples/virtual-scroll/virtual-scroll.component';
import { SingleSelectComponent } from './examples/single-select/single-select.component';
import { CustomWidthComponent } from './examples/custom-width/custom-width.component';
import { TextAlignComponent } from './examples/text-align/text-align.component';
import { ToolbarComponent } from './examples/toolbar/toolbar.component';
import { Editable1Component } from './examples/editable1/editable1.component';
import { PaginationComponent } from './examples/pagination/pagination.component';

const routes: Routes = [
  { path: '', component: DocComponent },
  { path: 'doc', component: DocComponent },
  { path: 'changeLog', component:ChangeLogComponent },
  { path: 'basic', component:BasicExampleComponent },
  { path: 'templateRef', component:TemplateRefExampleComponent },
  { path: 'multiSelect', component:MultiSelectComponent },
  { path: 'draggable', component:DraggableComponent },
  { path: 'editable1', component:EditableComponent },
  { path: 'filterGrid', component:FilterGridComponent },
  { path: 'virtualScroll', component:VirtualScrollComponent },
  { path: 'singleSelect', component:SingleSelectComponent },
  { path: 'customWidth', component:CustomWidthComponent },
  { path: 'textAlign', component:TextAlignComponent },
  { path: 'toolbar', component:ToolbarComponent },
  { path: 'editable2', component:Editable1Component },
  { path: 'pagination', component:PaginationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
