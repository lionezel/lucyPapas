import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsHomeModule } from './components/components-home.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [HomeComponent, CategoryComponent],
  imports: [CommonModule, ComponentsHomeModule, CarouselModule, SharedModule, AppRoutingModule],
})
export class HomeModule {}
