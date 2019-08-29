import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';

// Act like .unsubscribe(), but just take N objects and auto unsubscribe
import 'rxjs/add/operator/take';
// eg: this.productService.get(id).TAKE(1).subscribe( p => this.product = p);


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: any;
  product = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private productService: ProductService) {

                this.categories$ = categoryService.getCategories();
                const id = this.route.snapshot.paramMap.get('id');
                if (id) {
                  this.productService.get(id).take(1).subscribe( p => this.product = p);
                }

   }

  ngOnInit() {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
