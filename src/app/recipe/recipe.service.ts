import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shopService: ShoppingListService) {}

    private recipes: Recipe[]  = [
        new Recipe(
            'Recipe Name',
            'Tyeetus',
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
        ),
        new Recipe(
            'Recipe Name 2',
            'Tyeetus',
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1',
            [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shopService.addIngredients(ingredients);
    }
}