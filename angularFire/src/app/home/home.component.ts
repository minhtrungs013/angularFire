import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/models/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product$!: Observable<Product[]>;
  
  constructor(productService: ProductService) {
    this.product$ =productService.product$;
    this.product$.subscribe(a => console.log(a, 'category'))
   }
  ngOnInit(): void {
  }

}
