import { NgModule } from '@angular/core';
import { ProductListComponent } from "./product-list.component";
import { ConvertToSpacePipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./product-detail.component";

import { ProductGuardService } from "./product-guard.service";
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
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
