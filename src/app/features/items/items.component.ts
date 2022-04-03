import { Component, OnInit } from '@angular/core';
import {ItemsApiService} from "../../common/services/items-api.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items?: any;

  constructor(private itemsAPI: ItemsApiService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  private fetchItems() {
    this.itemsAPI.fetchAllItems().subscribe(result => this.items = result);
  }

}
