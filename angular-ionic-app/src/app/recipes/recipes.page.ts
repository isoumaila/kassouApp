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
  
  constructor(private recipesServices: RecipesService) { 
    this.recipeJson = this.recipesServices.getAllRecipesJson(this.recipeJson);
  }

  ngOnInit() {
    //this.recipes= this.recipesServices.getAllRecipes();
   
    //console.log(this.recipeJson);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.recipeJson = [];
    this.recipeJson = this.recipesServices.getAllRecipesJson(this.recipeJson);

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.recipeJson = this.recipeJson.filter((item) => {
        return (item.shopMarketPlaceName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
