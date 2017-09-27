import { Pipe, PipeTransform } from '@angular/core';
import * as remark from 'remark';
import * as  recommended from 'remark-preset-lint-recommended';
import * as  html from 'remark-html';
import * as  report from 'vfile-reporter';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  public transform(value: string): string {
    let result: string;
    remark()
      .use(recommended)
      .use(html)
      .process(value, (err, file) => {
        if (err) {
          console.error(report(err || file));
        }
        result = String(file);
      });
    return result;
  }

}
