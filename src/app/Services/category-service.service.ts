import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  baseUrl: string = "https://5bcce576cf2e850013874767.mockapi.io/task/";
  categories: any = [];
  products: any = [];
  extras: any;


  constructor(private httpClient: HttpClient) { }

  getCategories() {
    return this.httpClient.get(this.baseUrl + 'categories').pipe(
      map(res => {
        return res;
      }),
      catchError(error => {
       throw Error(error);
      })
    );
  }

  getCategoryProducts(categories, categoryName) {
    this.products = categories.filter((category) => {
      const lowerCasedCategoryName = category.name.toLowerCase();
        if(lowerCasedCategoryName === categoryName) {
          return category;
        }
    }).map(category => ({ name: category.name, img: category.category_img, products: category.products}))
      .reduce((arr) => arr);
    return this.products;
  }
  setExtras(product) {
    this.extras = product;
  }

  getExtras() {
    return this.extras;
  }
}
