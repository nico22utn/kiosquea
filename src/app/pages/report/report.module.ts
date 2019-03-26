import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { ReportComponent } from './report.component';

@NgModule({
    declarations: [ReportComponent],
    imports: [ CommonModule,ThemeModule ],
    exports: [ReportComponent]
})
export class ReportModule {}