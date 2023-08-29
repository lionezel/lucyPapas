import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsHomeModule } from './components/components-home.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsHomeModule, SharedModule],
})
export class HomeModule {}
