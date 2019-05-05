import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProductModule } from './product/product.module';
import { DebtsModule } from './debts/debts.module';
import { ReportModule } from './report/report.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    ProductModule,
    DebtsModule,
    ReportModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
