import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddPeoductComponent } from './admin/add-peoduct/add-peoduct.component';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AddPeoductComponent],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    ProductsModule,
  ],
})
export class PageModule {}
