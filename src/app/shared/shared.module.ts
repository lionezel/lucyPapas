import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, CarouselComponent, ProductsListComponent, FooterComponent],
  imports: [CommonModule, PrimengModule],
  exports: [NavbarComponent, CarouselComponent, ProductsListComponent],
})
export class SharedModule {}
