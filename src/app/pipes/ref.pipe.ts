import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(value: string): string {
    let result: string;
    result = "REF-"+ value;
    return result;
  }

}
