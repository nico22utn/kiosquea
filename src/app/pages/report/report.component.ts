import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const HEAD_REPORT_STOCK = 'Consulte el stock de sus productos en el rango de fechas que desee';
const HEAD_REPORT_DEBTS = 'Consulte la deuda de sus clientes en el rango de fechas que desee';
const HEAD_REPORT_EXPIRATIONS = 'Consulte el vencimiento de sus productos en el rango de fechas que desee';
const HEAD_TABLE_STOCK = 'Stock de productos';
const HEAD_TABLE_DEBTS = 'Vecinos actualmente con deudas';
const HEAD_TABLE_EXPIRATIONS = 'Productos próximos a vencer';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {


  @Input() stocks;
  @Input() debts;
  @Input() expirations;
  itemForm: FormGroup;
  searchIsDone: boolean;
  hasItems: boolean;
  items: any[] = [];
  descriptionReport: string;
  headerTable: string;
  constructor() {
  }

  ngOnInit() {
    this.searchIsDone = false;
    this.itemForm = new FormGroup({
      'fromDate': new FormControl('', Validators.required),
      'toDate': new FormControl('', Validators.required),
    });
    if (this.debts) {
      this.descriptionReport = HEAD_REPORT_DEBTS;
      this.headerTable = HEAD_TABLE_DEBTS;
    } else if (this.stocks) {
      this.descriptionReport = HEAD_REPORT_STOCK;
      this.headerTable = HEAD_TABLE_STOCK;
    } else if (this.expirations) {
      this.descriptionReport = HEAD_REPORT_EXPIRATIONS;
      this.headerTable = HEAD_TABLE_EXPIRATIONS;
    }
  }

  searchItems() {
    this.searchIsDone = true;
    const {fromDate, toDate} = this.itemForm.controls;
    if (this.debts) {

    } else if (this.stocks) {

    } else if (this.expirations) {

    }
  }

}

