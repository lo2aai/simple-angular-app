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
      console.log(this.categoryItems);
    });
  }

  // Click event handler to all categories items
  onClickHandler(name) {
    this.router.navigateByUrl(name.toLowerCase());
  }

}
