import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxdatagridComponent } from './ngxdatagrid/ngxdatagrid.component';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './examples/basic/basic-example.component';
import { TemplateRefExampleComponent } from './examples/templateRef/template-ref-example.component';
import { MultiSelectComponent } from './examples/multi-select/multi-select.component';
import { DraggableComponent } from './examples/draggable/draggable.component';
import { EditableComponent } from './examples/editable/editable.component';
import { FilterGridComponent } from './examples/filter-grid/filter-grid.component';

const routes: Routes = [
  { path: '', component: BasicExampleComponent },
  { path: 'basic', component:BasicExampleComponent },
  { path: 'templateRef', component:TemplateRefExampleComponent },
  { path: 'multiSelect', component:MultiSelectComponent },
  { path: 'draggable', component:DraggableComponent },
  { path: 'editable', component:EditableComponent },
  { path: 'filterGrid', component:FilterGridComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
