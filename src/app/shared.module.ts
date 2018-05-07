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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,MatToolbarModule,MatButtonModule,MatGridListModule,MatListModule,MatRadioModule,MatSlideToggleModule,
    MatCheckboxModule,MatCardModule,MatDividerModule,MatSelectModule,MatProgressBarModule,MatExpansionModule
  ],
  declarations: [],
  exports:[MatCheckboxModule,MatToolbarModule,MatButtonModule,MatGridListModule,MatProgressBarModule,MatExpansionModule,
  MatListModule,MatCardModule,MatDividerModule,MatSelectModule,MatRadioModule,MatSlideToggleModule]
})
export class SharedModule { }
