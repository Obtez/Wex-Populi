import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactionsApiService {

  private baseUrl: string = 'http://localhost:8080/factions'

  constructor(private http: HttpClient) {
    this.fetchAllFactions();
  }

  fetchAllFactions() {
    return this.http.get(this.baseUrl + '/all').pipe(
      map(result => {
        return result
      })
    );
  }
}
