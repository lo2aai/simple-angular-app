import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../Services/category-service.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categoryItems: any = [];
  products = [];

  constructor(private http: HttpClient, private router: Router, private categoriesService: CategoryServiceService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categoryItems = data;
    });
    // this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').subscribe((data) => {
    //   this.categoryItems = data;
    //   console.log(this.categoryItems);
    // });
  }

  // Click event handler to all categories items
  onClickHandler(name) {
    this.router.navigateByUrl(name.toLowerCase());

    // if (name === 'Seafood') {
    //   this.router.navigateByUrl(name);
    // } else if (name === 'Fruits'){
    //   this.router.navigateByUrl('fruits-items');
    // } else if (name === 'Vegetables') {
    //   this.router.navigateByUrl('vegtables-items');
    // } else if (name === 'Meats') {
    //   this.router.navigateByUrl('meats-items');
    // }
  }

}
