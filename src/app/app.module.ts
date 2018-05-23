import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxdatagridComponent } from './ngxdatagrid/ngxdatagrid.component';
import { RoutingModule } from './/routing.module';
import { BasicExampleComponent } from './examples/basic/basic-example.component';
import { TemplateRefExampleComponent } from './examples/templateRef/template-ref-example.component';
import { MultiSelectComponent } from './examples/multi-select/multi-select.component';
import { DraggableComponent } from './examples/draggable/draggable.component';
import { EditableComponent } from './examples/editable/editable.component';
import { FilterGridComponent } from './examples/filter-grid/filter-grid.component';
import { VirtualScrollComponent } from './examples/virtual-scroll/virtual-scroll.component';
import { DocComponent } from './doc/doc.component';
import { SingleSelectComponent } from './examples/single-select/single-select.component';
import { CustomWidthComponent } from './examples/custom-width/custom-width.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { TextAlignComponent } from './examples/text-align/text-align.component';
import { ToolbarComponent } from './examples/toolbar/toolbar.component';
import { Editable1Component } from './examples/editable1/editable1.component';


@NgModule({
  declarations: [
    AppComponent,
    NgxdatagridComponent,
    BasicExampleComponent,
    TemplateRefExampleComponent,
    MultiSelectComponent,
    DraggableComponent,
    EditableComponent,
    FilterGridComponent,
    VirtualScrollComponent,
    DocComponent,
    SingleSelectComponent,
    CustomWidthComponent,
    ChangeLogComponent,
    TextAlignComponent,
    ToolbarComponent,
    Editable1Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
