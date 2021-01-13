import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] =[
    {
      id:'r1',
      title: 'Boutique cosmétique de Hassan',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
      ingredients: ['Défrisons', 'Crèmes', 'Parfums pour homme et femme'],
      productType :'Articles que vous pouvez trouver dans cette boutique :'
    
    },
    {
      id:'r2',
      title: 'Boutique consmétique de Amadou',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5i-w65JTrM2H1tclmo0_Di-G8cKBaIsCAg&usqp=CAU',
      ingredients: ['Savons de douches', 'Chaines complée', 'Bracelets'],
      productType :'Articles que vous pouvez trouver dans cette boutique :'
    
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
}
