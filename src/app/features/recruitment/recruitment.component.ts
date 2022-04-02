import { Component, OnInit } from '@angular/core';
import {FighterType, RecruitmentService} from "./recruitment.service";

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {

  newRecruit?: any;

  constructor(
    private recruitmentService: RecruitmentService
  ) { }

  ngOnInit(): void {
  }

  recruit(type: FighterType) {
    this.newRecruit = this.recruitmentService.recruitNewFighter(type);
  }

}
