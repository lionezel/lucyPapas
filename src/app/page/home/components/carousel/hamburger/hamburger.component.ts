import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  public hamburger_arr: Products[] = [];

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
    this.getAllHamgurger();
  }

  getAllHamgurger() {
    this._productServices.getPlaces().subscribe((response) => {
      this.hamburger_arr = response;
      console.log(this.hamburger_arr);
    });
  }
}
