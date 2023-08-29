import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburgerComponent } from './hamburger/hamburger.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HamburgerComponent
  ]
})
export class CarouselModule { }
