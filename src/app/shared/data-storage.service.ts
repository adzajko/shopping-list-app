import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../core/components/recipes/recipe.service";
import { Recipe } from "../core/components/recipes/Recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  defaultFireBaseUrl = "https://shopping-list-app-fdecc.firebaseio.com/";

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${this.defaultFireBaseUrl}/recipes.json`, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(`${this.defaultFireBaseUrl}/recipes.json`)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
