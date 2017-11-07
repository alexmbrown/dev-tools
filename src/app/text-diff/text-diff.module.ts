import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDiffRoutingModule } from './text-diff-routing.module';
import { TextDiffComponent } from './text-diff.component';
import { MatButtonModule, MatCardModule, MatGridListModule, MatInputModule } from '@angular/material';
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
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [TextDiffComponent]
})
export class TextDiffModule { }
