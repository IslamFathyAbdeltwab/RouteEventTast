import { Component, inject, OnInit } from '@angular/core';
import { HomeProductService } from '../service/home-product.service';
import { product } from '../interface/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

 private readonly _HomeProductService=inject(HomeProductService)

 productRes:product[]=[]
 productRes2:product[]=[]

 SearchproductRes:product[]=[]

 searchTearm:string=' ';

ngOnInit(): void {
  this._HomeProductService.getAllProduct().subscribe({

    next:(res)=>{this.productRes=res ,this.productRes2=this.productRes},
    
  })
}
dropdownOpen = false;

toggleDropdown(): void {
  this.dropdownOpen = !this.dropdownOpen;
}

search(e: Event){
 this.searchTearm=(e.target as HTMLInputElement).value
 console.log(this.searchTearm)
this.productRes = this.productRes2.filter(p =>
    p?.title?.toLowerCase().includes(this.searchTearm.toLowerCase())
  );
}
sortByPrice(){
  
  this.productRes.sort((a,b)=>a.price- b.price)
}
sortByName()
{
 
 this.productRes.sort((a, b) => a.title.localeCompare(b.title))

}
}
