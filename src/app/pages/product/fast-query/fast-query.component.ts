import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../@core/data/product.service';

@Component({
  selector: 'ngx-fast-query',
  templateUrl: './fast-query.component.html',
  styleUrls: ['./fast-query.component.scss'],
})
export class FastQueryComponent implements OnInit {

  products = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {}

  searchProduct($event) {
    const query = $event.target.value;
    if (query.length > 3) {
      this.productService.searchProduct(query).subscribe((res: any) => {
        this.products = res;
      });
    }
  }
}
