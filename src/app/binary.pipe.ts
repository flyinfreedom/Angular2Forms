import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binary'
})
export class BinaryPipe implements PipeTransform {

  transform(value: number): string {
    let result: string = "";
    let temp: number = value;

    if(value == null)
    {
      return "No Number";
    }

    while (!(value < 1 && value > 0)) {

      if (temp % 2 == 1) {
        result = "1" + result;
      } else {
        result = "0" + result;
      }

      temp = Math.floor(temp / 2);
      value = value / 2;

      if(value == 0)
      {
        break;
      }
    }

    return result;
  }

}
