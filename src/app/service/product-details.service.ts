import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
private readonly _HttpClient=inject(HttpClient) 
  constructor() { }

  getProductInfo(id:string|null):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
