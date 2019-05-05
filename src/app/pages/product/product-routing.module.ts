import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StockComponent } from './stock/stock.component';
import { ExpirationComponent } from './expiration/expiration.component';
import { ProductResolve } from './product-resolve.service';
import { FastQueryComponent } from './fast-query/fast-query.component';

const routes: Routes = [{
    path: '',
    component: ProductComponent,
    children: [
        {
            path: 'list',
            component: ProductListComponent,
        },
        {
            path: 'fast-query',
            component: FastQueryComponent,
        },
        {
            path: 'add',
            component: AddProductComponent,
        },
        {
            path: 'update/:id',
            component: AddProductComponent,
            data: {
                isEditMode: true,
            },
            resolve: {
                data: ProductResolve,
            },
        },
        {
            path: 'stock',
            component: StockComponent,
        },
        {
            path: 'expirations',
            component: ExpirationComponent,
        },
    ],
  }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
