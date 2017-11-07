import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatToolbarModule } from '@angular/material';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { PanelChildComponent, PanelComponent } from './components/panel/panel.component';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { SyntaxHighlightPipe } from './pipes/syntax-highlight.pipe';
import { WhitespacePipe } from './pipes/whitespace.pipe';

@NgModule({
  exports: [
    // components
    ConfirmationDialogComponent,
    PanelComponent,
    PanelChildComponent,
    // pipes
    MarkdownPipe,
    SyntaxHighlightPipe,
    WhitespacePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  declarations: [
    // components
    ConfirmationDialogComponent,
    PanelComponent,
    PanelChildComponent,
    // pipes
    MarkdownPipe,
    SyntaxHighlightPipe,
    WhitespacePipe
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    SyntaxHighlightPipe
  ]
})
export class SharedModule { }
