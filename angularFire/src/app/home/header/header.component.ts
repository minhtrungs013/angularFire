import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  product$!: Observable<Product[]>;
  

  constructor(productService: ProductService) {
    this.product$ =productService.product$;
    this.product$.subscribe(a => console.log(a, 'category'))
   }
  ngOnInit(): void {
  }

}
