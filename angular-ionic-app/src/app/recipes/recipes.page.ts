import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Recipe } from './recipe.model';
import { Recipejson } from './recipe.model.json';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  private recipeJson: Recipejson[] = [];
  
  constructor(private recipesServices: RecipesService) { }

  ngOnInit() {
    //this.recipes= this.recipesServices.getAllRecipes();
    this.recipeJson = this.recipesServices.getAllRecipesJson(this.recipeJson);
    //console.log(this.recipeJson);
  }



}
