import { NgModule } from '@angular/core';
import { ProductListComponent } from "./product-list.component";
import { ConvertToSpacePipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./product-detail.component";

import { RouterModule } from '@angular/router';
import { ProductGuardService } from "./product-guard.service";
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
