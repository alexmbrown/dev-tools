import { Pipe, PipeTransform } from '@angular/core';
import { MarkdownService } from '../../core/services/markdown.service';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(private markdownService: MarkdownService) {}

  public transform(value: string): string {
    return this.markdownService.transform(value);
  }

}
