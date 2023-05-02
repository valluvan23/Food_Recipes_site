import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit{
  @Input() recipe: Recipes;

  constructor(){

  }

  ngOnInit(){
    
  }


}
