import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from './../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  activeRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('recipeId')) {
        this.router.navigate(['/', 'recipes']);
        return;
      }
      const recipeId = params.get('recipeId');
      this.activeRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipeClick(): void {
    this.alertController
      .create({
        header: 'Are you sure?',
        message: 'Delete this recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.deleteRecipe();
            }
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  private deleteRecipe(): void {
    console.log('deleting this item');
    this.recipeService.deleteRecipe(this.activeRecipe.id);
    this.router.navigate(['/recipes']);
  }
}
