import { Component } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-potato-page',
  templateUrl: './potato-page.component.html',
  styleUrls: ['./potato-page.component.css']
})
export class PotatoPageComponent {
  public potato_arr: Products[] = [];
  public itemBread: any | undefined

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
    this.getPotato();
    this.breadCrumb();
  }

  breadCrumb(){
    this.itemBread = [{ label: 'Inicio' , icon: 'pi pi-home', routerLink: '/' }, { label: 'Salchipapas' , icon: 'pi pi-sun' } ]
  }

  getPotato() {
    this._productServices.getPlaces().subscribe((response) => {
      this.potato_arr = response.filter(
        (product) => product.category?.name.trim() === 'Papas'
      );
    });
  }
}
