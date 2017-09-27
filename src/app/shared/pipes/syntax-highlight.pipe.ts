import { Pipe, PipeTransform } from '@angular/core';

declare const Prism: any;

@Pipe({
  name: 'syntaxHighlight'
})
export class SyntaxHighlightPipe implements PipeTransform {

  public transform(code: string, type: string): string {
    console.log(Prism.languages);
    if (code && type) {
      let lang;
      switch (type) {
        case 'html': lang = Prism.languages.html; break;
        case 'scss': lang = Prism.languages.scss; break;
        case 'typescript': lang = Prism.languages.typescript; break;
      }
      if (lang) {
        return Prism.highlight(code, lang);
      }
    }
  }

}
