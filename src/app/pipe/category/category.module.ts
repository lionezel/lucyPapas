import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerPipe } from './hamburger.pipe';



@NgModule({
  declarations: [
    HamburgerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
