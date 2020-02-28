import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./core/components/recipes/recipes.component";
import { ShoppingListComponent } from "./core/components/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./core/components/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./core/components/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./core/components/recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./core/components/recipes/recipes-resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
