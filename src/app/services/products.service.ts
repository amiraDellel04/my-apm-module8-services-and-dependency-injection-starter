import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Nouveau depuis Angular 6
})
export class ProductsService {

  URL: string = 'http://localhost:3000/product';

  constructor(private _http: HttpClient) { } // DI


  getAllProducts(): Observable< IProduct[]> {

return this._http.get<IProduct[]>(this.URL);

  }

}


