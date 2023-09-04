import { Component, OnInit } from '@angular/core';

import { Products } from 'src/app/model/products';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-hamburguer-page',
  templateUrl: './hamburguer-page.component.html',
  styleUrls: ['./hamburguer-page.component.css'],
})
export class HamburguerPageComponent implements OnInit {
  public hamburgurger_arr: Products[] = [];
  public itemBread: any | undefined

  constructor(private _productServices: ProductoService, private _carritoServices: CarritoService) {}

  ngOnInit(): void {
    this.getHamburger();
    this.breadCrumb();
  }

  breadCrumb(){
    this.itemBread = [{ label: 'Inicio' , icon: 'pi pi-home', routerLink: '/' }, { label: 'Hamburguesas' , icon: 'pi pi-sun' } ]
  }

  getHamburger() {
    this._productServices.getPlaces().subscribe((response) => {
      this.hamburgurger_arr = response.filter(
        (product) => product.category?.name.trim() === 'Hamgurguesa'
      );
      console.log(this.hamburgurger_arr)
    });
  }
  addCarrito(){
    
  }
}
