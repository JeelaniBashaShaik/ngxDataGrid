import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxdatagridComponent } from './ngxdatagrid/ngxdatagrid.component';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './examples/basic/basic-example.component';
import { TemplateRefExampleComponent } from './examples/templateRef/template-ref-example.component';
import { MultiSelectComponent } from './examples/multi-select/multi-select.component';

const routes: Routes = [
  { path: '', component: BasicExampleComponent },
  { path: 'basic', component:BasicExampleComponent },
  { path: 'templateRef', component:TemplateRefExampleComponent },
  { path: 'multiSelect', component:MultiSelectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
