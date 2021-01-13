import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  
  constructor(private recipesServices: RecipesService) { }

  ngOnInit() {
    this.recipes= this.recipesServices.getAllRecipes();
  }



}