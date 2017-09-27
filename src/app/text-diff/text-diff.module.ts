import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDiffRoutingModule } from './text-diff-routing.module';
import { TextDiffComponent } from './text-diff.component';
import { MdCardModule, MdGridListModule, MdInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TextDiffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MdGridListModule,
    MdInputModule,
    MdCardModule
  ],
  declarations: [TextDiffComponent]
})
export class TextDiffModule { }
