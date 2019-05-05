import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductById(id: string) {
    return this.http.get(`${environment.BASE_END_POINT}${environment.ROOT_PAGE}${environment.PRODUCT}/${id}`);
  }

  searchProduct(query: string) {
    const params = {query};
    return this.http
    .get(`${environment.BASE_END_POINT}${environment.ROOT_PAGE}${environment.PRODUCT}?${new URLSearchParams(params)}`);
  }
}
