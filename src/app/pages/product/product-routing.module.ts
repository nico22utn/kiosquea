import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StockComponent } from './stock/stock.component';
import { ExpirationComponent } from './expiration/expiration.component';

const routes: Routes = [{
    path: '',
    component: ProductComponent,
    children: [
        {
            path: 'list',
            component: ProductListComponent,
        },
        {
            path: 'add',
            component: AddProductComponent,
        },
        {
            path: 'update',
            component: AddProductComponent,
        },
        {
            path: 'stock',
            component: StockComponent,
        },
        {
            path: 'expirations',
            component: ExpirationComponent,
        }
    ],
  }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
