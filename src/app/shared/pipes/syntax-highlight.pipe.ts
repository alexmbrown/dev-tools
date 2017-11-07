import { Pipe, PipeTransform } from '@angular/core';

declare const Prism: any;

@Pipe({
  name: 'syntaxHighlight'
})
export class SyntaxHighlightPipe implements PipeTransform {

  public transform(code: string, type: string): string {
    if (code && type) {
      let lang;
      switch (type) {
        case 'html': case 'xml': lang = Prism.languages.html; break;
        case 'json': lang = Prism.languages.json; break;
        case 'scss': lang = Prism.languages.scss; break;
        case 'typescript': lang = Prism.languages.typescript; break;
      }
      if (lang) {
        return Prism.highlight(code, lang);
      }
    }
  }

}
