import { Component, OnInit } from '@angular/core';
import {Item} from "../../common/models/item";
import {ItemsApiService} from "../../common/services/items-api.service";

const emptyItem: Item = {
  name: '',
  description: '',
  defense_modifier: 0,
  attack_modifier: 0,
  image_url: ''
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  public model: Item = {
    name: '',
    description: '',
    defense_modifier: 0,
    attack_modifier: 0,
    image_url: ''
  }

  constructor(
    private itemsAPI: ItemsApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    try {
      this.itemsAPI.saveNewItem(this.model).subscribe(result => console.log(result));
      this.model = {...emptyItem}
    } catch (e: any) {
      throw new Error(e);
    }
  }

}
