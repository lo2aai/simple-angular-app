import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoryServiceService } from '../Services/category-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  data: any;

// tslint:disable-next-line: max-line-length
  constructor(private categoriesService: CategoryServiceService,private route: ActivatedRoute, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.data = this.categoriesService.getExtras();
  }

}
