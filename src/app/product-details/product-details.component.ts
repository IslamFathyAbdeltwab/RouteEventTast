import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../service/product-details.service';
import { productInfo } from '../interface/productinfo';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
 productId!: string|null;
 productinfo:productInfo={} as productInfo

 private readonly _ActivatedRoute=inject(ActivatedRoute) 
 private readonly _ProductDetailsService=inject( ProductDetailsService);

  constructor() {}

  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(id)=>{
     this.productId=id.get("id")
     
     console.log("id pro")
     console.log(this.productId)
     this._ProductDetailsService.getProductInfo(this.productId).subscribe({

      next:(res)=>{console.log(res)
        console.log("this is the prodcut detaisle islam")
        this.productinfo=res;
      }
     })


    }
   })
  }
}
