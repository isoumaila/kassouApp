import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import data from '../../assets/data.json';
import { Recipejson } from './recipe.model.json';

import { HttpClient } from '@angular/common/http';
import { RecipeClass } from './recipeClass';
import { Observable } from 'rxjs';

// import { Http , Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 /**
    * @name _HOST 
    * @type {String} 
    * @private
    * @description The network IP Address and port number that the
                    node application is running on
   */
  private _HOST : string 			=	"http://localhost:777/k-api/v1/";

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

  /*constructor() {
    console.log("SHOPS SERVICES CONTRUCTORS");
   }*/
  constructor( private _HTTP          : HttpClient) {
    console.log("SHOPS SERVICES CONTRUCTORS");
   }


  getAllRecipes() {
    return [...this.recipes];
  }
  getAllRecipesJson( recipeJsonParam: Recipejson[]) {
    return [...this.getDataFromJSONFile(recipeJsonParam)];
  }

  getAllRecipesFromAPI( recipeJsonParam: Recipejson[]) {
    return this.getDataFromKasuwaAPI(recipeJsonParam);
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


 
  /**
   * La liste des boutiques
   * 
   * @param recipeJsonParam : model de données
   * @returns : données issues de la base mongo db
   */
  getDataFromKasuwaAPI( recipeJsonParam: Recipejson[]) {
    this._HTTP
      .get(this._HOST + "shop")
      
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
        for (var i = 0; i < data.length; i++) {
          recipeJsonParam.push({
            id:  data[i]._id,
            shopName: data[i].shopName,
            shopImageUrl: data[i].shopimageUrl,
            shopArticleType: data[i].shopArticleType,
            shopPhoneNumber: data[i].shopPhoneNumber,
            shopHours: data[i].shopHours,
            shopContry: data[i].shopContry,
            shopCity: data[i].shopCity,
            shopMarketPlaceName: data[i].shopMarketPlaceName,
            shopArticleType1: data[i].shopArticleType1,
            shopingredients: data[i].shopingredients
          });
        }  
      },
      (error : any) =>
      {
         console.dir("ERROR dans la methode (getDataFromKasuwaAPI): " +error);
      });
   return recipeJsonParam;
  }
  getDataFromJSONFileObeservable( recipeJsonParam: Recipejson[]) {
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

  /**
   * 
   * @param id 
   * @returns 
   */
  getOneBoutigue(id: string): Observable<any> {
    id = id.trim();
  
    return this._HTTP.get(this._HOST + "shop/"+id).pipe(
        //catchError(this.handleError('searchHeroes', [])) // then handle the error
      );
  }
 
}
