import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipejson } from '../recipe.model.json';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Input() recipeItemJson: Recipejson;
  constructor() { }

  ngOnInit() {}

}
