import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDiffRoutingModule } from './text-diff-routing.module';
import { TextDiffComponent } from './text-diff.component';
import { MdButtonModule, MdCardModule, MdGridListModule, MdInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TextDiffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // material
    MdButtonModule,
    MdGridListModule,
    MdInputModule,
    MdCardModule
  ],
  declarations: [TextDiffComponent]
})
export class TextDiffModule { }
