import { Injectable } from '@angular/core';
import {Grunt} from "../../common/character/grunt";
import {Specialist} from "../../common/character/specialist";
import {Commander} from "../../common/character/commander";
import {RecruitmentApiService} from "../../common/services/recruitment-api.service";

export type FighterType = 'grunt' | 'specialist' | 'commander';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor(
    private recruitmentAPI: RecruitmentApiService
  ) { }

  public recruitNewFighter(type: FighterType) {
    switch(type) {
      case 'grunt':
        const newGrunt: Grunt = RecruitmentService.recruitGrunt();
        this.recruitmentAPI.addRecruit(type, newGrunt);
        break;

      case 'specialist':
        const newSpecialist = RecruitmentService.recruitSpecialist();
        this.recruitmentAPI.addRecruit(type, newSpecialist);
        break;

      case 'commander':
        const newCommander = RecruitmentService.recruitCommander();
        this.recruitmentAPI.addRecruit(type, newCommander);
        break;

      default:
        throw new Error('There was an error recruiting a new fighter')
    }
  }

  // TODO: Currently overwrites db
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
