import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  private baseUrl: string = 'http://localhost:8080/items';

  constructor(private http: HttpClient) {
  }

  fetchAllItems() {
    return this.http.get(this.baseUrl + '/all').pipe(
      map(result => {
        return result;
      })
    );
  }

  saveNewItem(item: Item) {
    return this.http.post(this.baseUrl + '/add', item).pipe(
      map(result => {
        return result;
      })
    );
  }

}
