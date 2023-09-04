import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/user/login/login.component';
import { RegisterComponent } from './page/user/register/register.component';
import { AddPeoductComponent } from './page/admin/add-peoduct/add-peoduct.component';
import { ProductsByIdComponent } from './page/products/products-by-id/products-by-id.component';
import { HamburguerPageComponent } from './page/products/hamburguer-page/hamburguer-page.component';
import { PotatoPageComponent } from './page/products/potato-page/potato-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addProducts', component: AddPeoductComponent },

  { path: 'products/hamburger', component: HamburguerPageComponent },
  { path: 'products/potato', component: PotatoPageComponent },
  { path: 'productsById/:id', component: ProductsByIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
