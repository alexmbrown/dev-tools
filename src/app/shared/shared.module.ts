import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { SyntaxHighlightPipe } from './pipes/syntax-highlight.pipe';

@NgModule({
  exports: [
    MarkdownPipe,
    SyntaxHighlightPipe
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    MarkdownPipe,
    SyntaxHighlightPipe
  ]
})
export class SharedModule { }
