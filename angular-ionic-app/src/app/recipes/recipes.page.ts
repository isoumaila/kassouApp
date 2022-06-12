import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Recipe } from './recipe.model';
import { Recipejson } from './recipe.model.json';
import { RecipesService } from './recipes.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {



  recipes: Recipe[];

  private recipeJson: Recipejson[] = [];
  
  constructor(private recipesServices: RecipesService,
              private _HTTP          : HttpClient) { 
    
    //L'initialisation de la liste des boutigues dans l'application
    this.recipeJson = this.recipesServices.getAllRecipesFromAPI(this.recipeJson);
  }

  ngOnInit() {
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
