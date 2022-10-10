import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['french fries', 'pork', 'salad'],
    },
    {
      id: 'r2',
      title: 'spaghetti',
      imageUrl:
        'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
      ingredients: ['spaghetti noodles', 'sauce'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
