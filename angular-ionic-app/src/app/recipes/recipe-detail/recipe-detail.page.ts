import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
loadedRecipe : Recipe;
localisation = "../assets/icon/google-maps.png";
defaultShopPhoto = "../assets/pictures/shopDefaultPhoto.png";
  constructor(private activatedRoute: ActivatedRoute,
    private recipesServices: RecipesService,
    private router: Router,
    private alertCrtl : AlertController) { }

  ngOnInit() {
    this.recipesServices.getDataFromJSONFile();
    this.activatedRoute.paramMap.subscribe( 
      paramMap =>  {
        if(!paramMap.has('recipeId')){

          return;
      }
      const id = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesServices.getRecipe(id);
    }
      )
      
      // To update, run: npm uninstall -g ionic
      //Then run: npm i -g @ionic/cli
  }


  onDeleteRecipe(){
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
            handler: () =>{
              this.recipesServices.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            }
            
          }
        ]
      }).then(alertElement =>{
        alertElement.present();
      }); 

  }
}
