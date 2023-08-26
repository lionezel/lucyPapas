import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, PrimengModule, SharedModule, FormsModule],
})
export class PageModule {}
