import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { DebtsComponent } from './debts.component';
import { DebtsRoutingModule } from './debts-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { ReportModule } from '../report/report.module';

@NgModule({
    declarations: [DebtsComponent],
    imports: [ CommonModule, ThemeModule, FormsModule, DebtsRoutingModule, Ng2SmartTableModule, ReportModule ],
    providers: [],
})
export class DebtsModule {}
