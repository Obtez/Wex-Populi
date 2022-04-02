import { Injectable } from '@angular/core';
import {Grunt} from "../../common/character/grunt";
import {Specialist} from "../../common/character/specialist";

type FighterType = 'grunt' | 'specialist' | 'commander';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor() { }

  private static recruitNewFighter(type: FighterType) {
    switch(type) {
      case 'grunt':
        RecruitmentService.recruitGrunt();
        break;

      case 'specialist':
        RecruitmentService.recruitSpecialist();
        break;

      case 'commander':
        RecruitmentService.recruitCommander();
        break;

      default:
        throw new Error('There was an error recruiting a new fighter')
    }
  }

  private static recruitGrunt(): void {
    const newRecruit = new Grunt();

    console.log(newRecruit);
  }

  private static recruitSpecialist(): void {
    const newRecruit = new Specialist();

    console.log(newRecruit);
  }

  private static recruitCommander(): void {
    const newRecruit = new Specialist();

    console.log(newRecruit)
  }


}
