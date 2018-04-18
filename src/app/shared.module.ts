import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,MatToolbarModule,MatButtonModule,MatGridListModule,MatListModule,
    MatCheckboxModule,MatCardModule,MatDividerModule,MatSelectModule,MatProgressBarModule
  ],
  declarations: [],
  exports:[MatCheckboxModule,MatToolbarModule,MatButtonModule,MatGridListModule,MatProgressBarModule,
  MatListModule,MatCardModule,MatDividerModule,MatSelectModule]
})
export class SharedModule { }
