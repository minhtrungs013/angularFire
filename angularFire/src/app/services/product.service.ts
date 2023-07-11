import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  concatAll, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, concat, of } from 'rxjs';
import { Product } from './models/product';

import { CollectionReference, DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private item$ = new BehaviorSubject<Product[]>([]);
  private _item$ = new Observable<Product[]>();
  private productFire: CollectionReference<DocumentData>;


  constructor(private http: HttpClient,
      private firestore: Firestore
  ) {
    this.productFire = collection(firestore, "product")
    this.getAllProduct()
  }

  async getAllProduct() {
    this._item$ = collectionData(this.productFire, {
      idField: 'id'
    }) as Observable<Product[]>;
    this._item$.pipe(
      map((val) => of(val)),
      concatAll()
    ).subscribe(it => {
      this.item$.next(it);      
    })
  }

  get product$() {
    return this.item$.asObservable()
  }

}