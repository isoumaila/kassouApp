import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import data from '../../assets/data.json';
import { Recipejson } from './recipe.model.json';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipeJson: Recipejson[] = [

  ]
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Boutique de Hassan',
      imageUrl: 'assets/pictures/boutique_cosmetique.jpg',
      ingredients: ['Défrisons', 'Crèmes', 'Parfums pour homme et femme'],
      productType: 'Articles et produits :',
      phoneNumber: 98773009,
      shopType: 'cosmetique, bijouterie',
      market: 'Harro Banda',
      town: 'Niamey'

    },
    {
      id: 'r2',
      title: 'Boutique de Amadou',
      imageUrl: 'assets/pictures/boutique_cosmetique1.jpg',
      ingredients: ['Savons de douches', 'Chaines complée', 'Bracelets'],
      productType: 'Articles et produits :',
      phoneNumber: 92366341,
      shopType: 'cosmetique, bijouterie',
      market: 'Harro Banda',
      town: 'Niamey'
    },
    {
      id: 'r3',
      title: 'Boutique de Hassoumi',
      imageUrl: 'assets/pictures/boutique_cosmetique2.jpg',
      ingredients: ['Poudre et autres produits pour maquillage', 'Bagues pour femme', 'Bracelets'],
      productType: 'Articles et produits :',
      phoneNumber: 99140190,
      shopType: 'cosmetique, bijouterie',
      market: 'Harro Banda',
      town: 'Niamey'
    }
  ]
  constructor() { }


  getAllRecipes() {
    return [...this.recipes];
  }
  getAllRecipesJson( recipeJsonParam: Recipejson[]) {
    return [...this.getDataFromJSONFile(recipeJsonParam)];
  }

  getRecipe(id: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === id;
      }
      )
    };
  }
  getRecipeFromJSON(id: number) {
    return {
      ...this.getDataFromJSONFile(this.recipeJson).find(recipe => {
       
        return recipe.id === id;
      }
      )
    };
  }
  getRecipeFromJSONData(id: number) {
    return {
      ...data.shops.find(recipe => {
      //  return recipe.id === id;
      }
      )
    };
  }
 
  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(
      recipe => {
        return recipe.id !== id;
      }
    );
  }

  getDataFromJSONFile( recipeJsonParam: Recipejson[]) {
    // console.log(data);

   for (var i = 0; i < data.shops.length; i++) {
      recipeJsonParam.push({
        id: i,
        shopName: data.shops[i].shopName,
        shopImageUrl: data.shops[i].shopimageUrl,
        shopArticleType: data.shops[i].shopArticleType,
        shopPhoneNumber: data.shops[i].shopPhoneNumber,
        shopHours: data.shops[i].shopHours,
        shopContry: data.shops[i].shopContry,
        shopCity: data.shops[i].shopCity,
        shopMarketPlaceName: data.shops[i].shopMarketPlaceName,
        shopArticleType1: data.shops[i].shopArticleType1,
        shopingredients: data.shops[i].shopingredients
      });
    }
   return recipeJsonParam;
  }



}
