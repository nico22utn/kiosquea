import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productForm = new FormGroup({});
    this.activatedRoute.data.subscribe((data) => {
      if (data.isEditMode) {
        // Set values to form
      }
    });
  }

}
