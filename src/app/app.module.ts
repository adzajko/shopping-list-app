import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/layout/header/header.component";
import { RecipesComponent } from "./core/components/recipes/recipes.component";
import { RecipeListComponent } from "./core/components/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./core/components/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./core/components/recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./core/components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./core/components/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from "./shared/directives/dropdown.directive";
import { RecipeDropdownDirective } from "./shared/directives/recipe-dropdown.directive";
import { RecipeStartComponent } from "./core/components/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./core/components/recipes/recipe-edit/recipe-edit.component";
import { ShoppingListService } from "./core/components/shopping-list/shopping-list.service";
import { RecipeService } from "./core/components/recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeDropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
