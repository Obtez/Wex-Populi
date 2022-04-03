import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FighterType} from "../../features/recruitment/recruitment.service";
import {Fighter} from "../models/fighter";
import {Grunt} from "../character/grunt";
import {Specialist} from "../character/specialist";
import {Commander} from "../character/commander";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentApiService {

  private baseUrl: string = 'http://localhost:3000/riot';
  private postOptions = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  constructor(
    private http: HttpClient
  ) { }

  // TODO: Create generic fighter interface
  addRecruit(type: FighterType, recruit: any) {
    switch (type) {
      case "grunt":
        this.addGrunt(recruit);
        break;

      case "specialist":
        this.addSpecialist(recruit);
        break;

      case "commander":
        this.addCommander(recruit);
        break;

      default:
        throw new Error('There was an error adding the recruit to the database.');
    }
  }

  // TODO maybe set up different db structure (more like documents in mongodb)
  private addGrunt(recruit: Grunt) {
    this.http.post(this.baseUrl + '?type=grunt', recruit, this.postOptions)
      .subscribe(result => console.log(result));
  }

  private addSpecialist(recruit: Specialist) {
    this.http.post(this.baseUrl + '/?type=specialist', recruit, this.postOptions)
      .subscribe(result => console.log(result));
  }

  private addCommander(recruit: Commander) {
    this.http.post(this.baseUrl + '/?type=commander', recruit, this.postOptions)
      .subscribe(result => console.log(result));
  }
}
