import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  @Output() selectedRecipe = new EventEmitter<Recipes>();
  recipes: Recipes[]=[ new Recipes('Test Rceipes', 'This is a sample test','https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg'),new Recipes('Test Rceipes 2', 'This is a sample test-2','https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg')];
  

  onselectrecipe(recipeselect: Recipes){
    this.selectedRecipe.emit(recipeselect);

  }

  constructor(){

  }
 
  ngOnInit(){
    
  }
  
  

}
