import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsByIdComponent } from './products-by-id/products-by-id.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductsByIdComponent],
  imports: [CommonModule, SharedModule],
})
export class ProductsModule {}
