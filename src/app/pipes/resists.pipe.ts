import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resists'
})
export class ResistsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value == "-"){
      return "-"
    }
    else if(value.toLowerCase() == "s"){
      return "Str"
    }
    else if(value.toLowerCase() == "w"){
      return "Wk"
    }
    else if(value.toLowerCase() == "n"){
      return "Nul"
    }
    else if(value.toLowerCase() == "r"){
      return "Rpl"
    }
    else if(value.toLowerCase() == "d"){
      return "Dr"
    }



    return null;
  }

}
