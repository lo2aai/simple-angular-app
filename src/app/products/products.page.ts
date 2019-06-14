import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../Services/category-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  category: any;
  constructor(private categoriesService: CategoryServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data) => {
      console.log(data);
      this.category = this.categoriesService.getCategoryProducts(data, this.route.snapshot.params.name);
      console.log(this.category);
    });
  }

}
