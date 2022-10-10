import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['french fries', 'pork', 'salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
      ingredients: ['spaghetti noodles', 'sauce'],
    },
  ];

  constructor() {}

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    const foundRecipe = this.recipes.find((recipe) => recipe.id === recipeId);
    return { ...foundRecipe };
  }

  deleteRecipe(recipeId: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
