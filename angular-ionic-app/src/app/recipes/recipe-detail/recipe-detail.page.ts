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
  imageBadeRef = "../";
  idJson: number;
  localisation = "../assets/icon/google-maps.png";
  defaultShopPhoto = "../assets/pictures/shopDefaultPhoto.png";
  constructor(private activatedRoute: ActivatedRoute,
    private recipesServices: RecipesService,
    private router: Router,
    private alertCrtl: AlertController) { }

  ngOnInit() {
    //this.recipesServices.getDataFromJSONFile();
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')) {
          //console.log(paramMap);
         // console.log("Y a rien");
          return;
        }
        //this.idJson = paramMap.get('id');
        this.loadedRecipeJson = this.recipesServices.getRecipeFromJSON(+paramMap.get('recipeId'));
      }
    )

    // To update, run: npm uninstall -g ionic
    //Then run: npm i -g @ionic/cli
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
