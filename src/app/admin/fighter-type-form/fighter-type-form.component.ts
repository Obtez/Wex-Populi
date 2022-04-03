import { Component, OnInit } from '@angular/core';
import {FighterType} from "../../common/models/fighter-type";
import {FighterTypeApiService} from "../../common/services/fighter-type-api.service";

const emptyFighterType: FighterType = {
  name: '',
  base_strength: 0,
  carry_capacity: 0,
  image_url: ''
}

@Component({
  selector: 'app-fighter-type-form',
  templateUrl: './fighter-type-form.component.html',
  styleUrls: ['./fighter-type-form.component.scss']
})
export class FighterTypeFormComponent implements OnInit {

  model: FighterType = {
    name: '',
    base_strength: 0,
    carry_capacity: 0,
    image_url: ''
  }

  constructor(
    private fighterTypeAPI: FighterTypeApiService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    try {
      this.fighterTypeAPI.saveNewFighterType(this.model).subscribe(result => console.log(result));
      this.model = {...emptyFighterType};
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
