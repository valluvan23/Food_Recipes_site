import { Recipes } from './../../recipes.model';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe!: Recipes;
@Output() recipeSelected = new EventEmitter<void>();

onselect(){
  this.recipeSelected.emit();

}
 constructor(){

 }

 ngOnInit(){
   
 }
 

}
