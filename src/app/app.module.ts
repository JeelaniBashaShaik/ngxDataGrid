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


@NgModule({
  declarations: [
    AppComponent,
    NgxdatagridComponent,
    BasicExampleComponent,
    TemplateRefExampleComponent,
    MultiSelectComponent
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
