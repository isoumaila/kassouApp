import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] =[
    {
      id:'r1',
      title: 'Boutique de Hassan',
      imageUrl: 'assets/pictures/boutique_cosmetique.jpg',
      ingredients: ['Défrisons', 'Crèmes', 'Parfums pour homme et femme'],
      productType :'Articles et produits :',
      phoneNumber: 98773009,
      shopType: 'cosmetique, bijouterie',
      market: 'Harro Banda',
      town: 'Niamey'
      
    },
    {
      id:'r2',
      title: 'Boutique de Amadou',
      imageUrl: 'assets/pictures/boutique_cosmetique1.jpg',
      ingredients: ['Savons de douches', 'Chaines complée', 'Bracelets'],
      productType :'Articles et produits :',
      phoneNumber: 92366341,
      shopType: 'cosmetique, bijouterie',
      market: 'Harro Banda',
      town: 'Niamey'
    },
    {
      id:'r3',
      title: 'Boutique de Hassoumi',
      imageUrl: 'assets/pictures/boutique_cosmetique2.jpg',
      ingredients: ['Poudre et autres produits pour maquillage', 'Bagues pour femme', 'Bracelets'],
      productType :'Articles et produits :',
      phoneNumber: 99140190,
      shopType: 'cosmetique, bijouterie',
      market: 'Harro Banda',
      town: 'Niamey'
    }
  ]
  constructor() { }


  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(id:string){
    return {
      ...this.recipes.find(recipe => {
      return  recipe.id === id;
    }
      )
  };
  }

  deleteRecipe(id: string){
    this.recipes = this.recipes.filter(
      recipe => {
        return recipe.id !== id;
      }
    );
  }

  getDataFromJSONFile(){
    console.log(data);
  }
}
