import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Ticker } from '../models/Ticker';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl    = 'http://localhost:4200/api/v1/products';
const btcapiUrl = 'https://www.btcturk.com/api/ticker';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url = 'https://www.btcturk.com/api/ticker';

  constructor(private http: HttpClient) { }

  getTicker2(): Observable<Ticker[]> {
    return this.http.get<Ticker[]>(this.url);
  }

  // Get list of products from remote server.
  readProducts(): Observable<Ticker[]> {
    return this.http.get(this.url)
                    .pipe(map((res: Response) => res.json()));
  }

  getTicker(): Observable<Ticker[]> {
    return this.http.get<Ticker[]>(btcapiUrl)
      .pipe(
        tap(Ticker => console.log('Fetch ticker')),
        catchError(this.handleError('getTicker', []))
      );
  }

  /*
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(products => console.log('Fetch products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct (product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product._id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  updateProduct (id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<Product> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }
  */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
