import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitespace'
})
export class WhitespacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
