import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsByIdComponent } from './products-by-id/products-by-id.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HamburgerCatComponent } from './hamburger-cat/hamburger-cat.component';

@NgModule({
  declarations: [ProductsByIdComponent, HamburgerCatComponent],
  imports: [CommonModule, SharedModule],
})
export class ProductsModule {}
