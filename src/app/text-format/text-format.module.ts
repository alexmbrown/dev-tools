import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatDialogModule, MatInputModule, MatMenuModule, MatSelectModule, MatSnackBarModule,
  MatTabsModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { TextFormatRoutingModule } from './text-format-routing.module';
import { TextFormatComponent } from './text-format.component';

@NgModule({
  declarations: [
    TextFormatComponent,
    SaveDialogComponent
  ],
  entryComponents: [
    SaveDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextFormatRoutingModule,
    SharedModule,
    // material
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class TextFormatModule { }
