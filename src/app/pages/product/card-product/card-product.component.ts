import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit() {
  }

}
