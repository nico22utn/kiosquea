import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  fruits = fruits;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  
  constructor(private service: SmartTableData) { }

  ngOnInit() {
    const data = this.service.getData();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

export const fruits: string[] = [
  'Lemons',
  'Raspberries',
  'Strawberries',
  'Blackberries',
  'Kiwis',
  'Grapefruit',
  'Avocado',
  'Watermelon',
  'Cantaloupe',
  'Oranges',
  'Peaches',
];
