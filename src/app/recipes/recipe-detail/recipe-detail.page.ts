import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private recipeService: RecipesService
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
}
