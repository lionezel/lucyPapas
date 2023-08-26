import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ToastModule,
    CarouselModule,
  ],
})
export class PrimengModule {}
