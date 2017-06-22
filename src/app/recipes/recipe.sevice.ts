import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes : Recipe[] = [
        new Recipe('testAAA','just test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
        [
            new Ingredient('meat',1),
            new Ingredient('French',23),
        ]),

        new Recipe('testBBBBB','just test',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'
            ,[
                new Ingredient('toast',1),
                new Ingredient('rrrrrrr',1),

            ])
    ];

   constructor(private slService:ShoppingListService){}


   addIngredientsToSL(ingredients:Ingredient[]){
       this.slService.addIngredients(ingredients);

   }

   getRecipes(){
       return this.recipes.slice();
   }

}