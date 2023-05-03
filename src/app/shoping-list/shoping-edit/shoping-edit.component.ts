import { FormsModule } from '@angular/forms';
import { Component, ElementRef, ViewChild, Output, EventEmitter, OnInit, } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit{
  @ViewChild('newName') newNameRef!: ElementRef;
  @ViewChild('newAmount') newAmountRef!: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onAdd(){
    const ingName = this.newNameRef.nativeElement.value;
    const ingAmount = this.newAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.newIngredient.emit(newIngredient);
    }

}
