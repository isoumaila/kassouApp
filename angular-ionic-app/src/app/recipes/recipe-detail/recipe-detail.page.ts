import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { Recipejson } from '../recipe.model.json';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  loadedRecipeJson: Recipejson;
  loadedRecipeJsonE: Recipejson[] = [];
  imageBadeRef = "../";
  idJson: number;
  localisation = "../assets/icon/google-maps.png";
  defaultShopPhoto = "../assets/pictures/shopDefaultPhoto.png";
  /**
   * @argument : on ne charge les données que après avoir finir l'appel à la db
   */
  loading: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private recipesServices: RecipesService,
    private router: Router,
    private alertCrtl: AlertController) {
      //this.onResquestBoutigueDetail();
     }

  ngOnInit() {
  
   this.onResquestBoutigueDetail();
  }

  onResquestBoutigueDetail(){
    
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')) {
          //console.log(paramMap);
          return;
        }
        this.recipesServices.getOneBoutigue(paramMap.get('recipeId'))
            .subscribe(
              (data) => {                           //next() callback
                this.loadedRecipeJson ={
                  id:  data._id,
                  shopName: data.shopName,
                  shopImageUrl: data.shopimageUrl,
                  shopArticleType: data.shopArticleType,
                  shopPhoneNumber: data.shopPhoneNumber,
                  shopHours: data.shopHours,
                  shopContry: data.shopContry,
                  shopCity: data.shopCity,
                  shopMarketPlaceName: data.shopMarketPlaceName,
                  shopArticleType1: data.shopArticleType1,
                  shopingredients: data.shopingredients
                }; 
              },
              (error) => {                             
                console.error('Request failed with error: '+error)
              },
              () => { 
                this.loading = true; 
              })
      }
    )
  }
  onDeleteRecipe() {
    this.alertCrtl.create(
      {
        header: "Deletion !",
        message: "Are you sure !",
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesServices.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            }

          }
        ]
      }).then(alertElement => {
        alertElement.present();
      });

  }
}
