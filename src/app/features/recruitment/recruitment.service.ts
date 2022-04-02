import { Injectable } from '@angular/core';
import {Grunt} from "../../common/character/grunt";
import {Specialist} from "../../common/character/specialist";
import {Commander} from "../../common/character/commander";

export type FighterType = 'grunt' | 'specialist' | 'commander';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor() { }

  public recruitNewFighter(type: FighterType) {
    switch(type) {
      case 'grunt':
        return RecruitmentService.recruitGrunt();

      case 'specialist':
        return RecruitmentService.recruitSpecialist();

      case 'commander':
        return RecruitmentService.recruitCommander();

      default:
        throw new Error('There was an error recruiting a new fighter')
    }
  }

  private static recruitGrunt(): Grunt {
    return new Grunt();
  }

  private static recruitSpecialist(): Specialist {
    return new Specialist();
  }

  private static recruitCommander(): Commander {
    return new Commander();
  }
}
