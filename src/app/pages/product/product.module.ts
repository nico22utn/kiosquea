import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StockComponent } from './stock/stock.component';
import { ExpirationComponent } from './expiration/expiration.component';
import { ReportModule } from '../report/report.module';
import { FastQueryComponent } from './fast-query/fast-query.component';
import { CardProductComponent } from './card-product/card-product.component';

@NgModule({
    declarations: [ProductComponent, AddProductComponent, ProductListComponent, StockComponent,
        ExpirationComponent, FastQueryComponent, CardProductComponent],
    imports: [
        CommonModule,
        ThemeModule,
        ProductRoutingModule,
        Ng2SmartTableModule,
        ReportModule,
    ],
    providers: [],
})
export class ProductModule {}
