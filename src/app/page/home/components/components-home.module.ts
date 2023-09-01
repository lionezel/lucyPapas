import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from './carousel/carousel.module';
import { PromComponent } from './prom/prom.component';

@NgModule({
  declarations: [
    PromComponent
  ],
  imports: [CommonModule, CarouselModule],

  exports: [
    PromComponent
  ]
})
export class ComponentsHomeModule {}
