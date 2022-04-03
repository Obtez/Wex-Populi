import { Component, OnInit } from '@angular/core';
import {FactionsApiService} from "../../common/services/factions-api.service";

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.scss']
})
export class FactionsComponent implements OnInit {

  public factions?: any;

  constructor(private factionsAPI: FactionsApiService) { }

  ngOnInit(): void {
    this.fetchFactions();
  }

  private fetchFactions() {
    this.factionsAPI.fetchAllFactions().subscribe((result) => this.factions = result);
  }

}
