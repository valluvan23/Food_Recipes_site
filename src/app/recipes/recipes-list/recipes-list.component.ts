import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent{
  recipes: Recipes[]=[ new Recipes('Test Rceipes', 'This is a sample test','https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg'),new Recipes('Test Rceipes', 'This is a sample test','https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg')];
  constructor(){}
  

}
