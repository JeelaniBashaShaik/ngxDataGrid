import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    TextAlignComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
