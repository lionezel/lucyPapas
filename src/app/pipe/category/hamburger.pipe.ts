import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'hamburger'
})
export class HamburgerPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any[]): any {
    
    return 
  }

}
