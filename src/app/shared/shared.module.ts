import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [NavbarComponent, CarouselComponent],
  imports: [CommonModule, PrimengModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
