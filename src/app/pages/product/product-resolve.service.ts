import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from '../../@core/data/product.service';


@Injectable()
export class ProductResolve implements Resolve<any> {
    constructor(private productService: ProductService) { }
    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params['id'];
        return this.productService.getProductById(id);
    }
}
