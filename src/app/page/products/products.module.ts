import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburguerPageComponent } from './hamburguer-page/hamburguer-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { PotatoPageComponent } from './potato-page/potato-page.component';

@NgModule({
  declarations: [ HamburguerPageComponent, PotatoPageComponent],
  imports: [CommonModule, SharedModule, PrimengModule],
})
export class ProductsModule {}
