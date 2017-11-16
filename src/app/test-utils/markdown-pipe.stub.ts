import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipeStub implements PipeTransform {

  public transform(value: string): string {
    return 'mock markdown';
  }

}
