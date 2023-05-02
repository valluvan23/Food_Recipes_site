import { Component } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model'

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent {
  ingredients =[ new Ingredient('Apple',5),new Ingredient('Tomato',6)];

  onIngredientAdd(ing: Ingredient){
    this.ingredients.push(ing);
  }
 
}
