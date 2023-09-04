import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-products-by-id',
  templateUrl: './products-by-id.component.html',
  styleUrls: ['./products-by-id.component.css']
})
export class ProductsByIdComponent {
  public id: string = ''

  constructor(private _ProductoService:ProductoService){

    
  }
}
