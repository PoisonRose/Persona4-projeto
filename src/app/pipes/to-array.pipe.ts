import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let resists:string[] = [value.substring(0,1), 
      value.substring(1,2), 
      value.substring(2,3), 
      value.substring(3,4), 
      value.substring(4,5), 
      value.substring(5,6),
      value.substring(6,7),
      value.substring(7,8)
    ]

    return resists;
  }

}
