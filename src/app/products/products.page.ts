import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../Services/category-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  category: any;
// tslint:disable-next-line: max-line-length
  constructor(private categoriesService: CategoryServiceService, private route: ActivatedRoute, public router: Router, public navCtrl: NavController) { }
  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.category = this.categoriesService.getCategoryProducts(data, this.route.snapshot.params.name);
      console.log(this.category);
    });
  }
  
  goToProductDetails(product) {
    this.categoriesService.setExtras(product);
    this.router.navigateByUrl('/product-details/' + product.id);
    return product;
  }
}
