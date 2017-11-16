import { Injectable } from '@angular/core';
import * as remark from 'remark';
import * as  recommended from 'remark-preset-lint-recommended';
import * as  html from 'remark-html';

@Injectable()
export class MarkdownService {

  constructor() { }

  public transform(text: string) {
    let result = '';
    remark()
      .use(recommended)
      .use(html)
      .process(text, (err, file) => result = String(file));
    return result;
  }

}
