import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from './carousel/carousel.module';
import { PromComponent } from './prom/prom.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    PromComponent,
    CategoryComponent
  ],
  imports: [CommonModule, CarouselModule],

  exports: [
    PromComponent,
    CategoryComponent
  ]
})
export class ComponentsHomeModule {}
