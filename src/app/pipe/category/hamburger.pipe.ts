import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hamburger'
})
export class HamburgerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
