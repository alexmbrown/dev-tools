import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { SyntaxHighlightPipe } from './pipes/syntax-highlight.pipe';
import { PanelChildComponent, PanelComponent } from './components/panel/panel.component';
import { MdCardModule, MdToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    // components
    PanelComponent,
    PanelChildComponent,
    // pipes
    MarkdownPipe,
    SyntaxHighlightPipe
  ],
  imports: [
    CommonModule,
    MdCardModule,
    MdToolbarModule
  ],
  declarations: [
    // components
    PanelComponent,
    PanelChildComponent,
    // pipes
    MarkdownPipe,
    SyntaxHighlightPipe
  ]
})
export class SharedModule { }
