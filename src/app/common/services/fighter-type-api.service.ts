import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {FighterType} from "../models/fighter-type";

@Injectable({
  providedIn: 'root'
})
export class FighterTypeApiService {

  private baseUrl: string = 'http://localhost:8080/fightertypes';

  constructor(private http: HttpClient) { }

  fetchAllFighterTypes() {
    return this.http.get(this.baseUrl + '/all').pipe(
      map(result => {
        return result;
      })
    );
  }

  saveNewFighterType(fighterType: FighterType) {
    return this.http.post(this.baseUrl + '/add', fighterType).pipe(
      map(result => {
        return result;
      })
    );
  }
}
