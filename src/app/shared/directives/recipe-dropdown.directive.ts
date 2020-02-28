import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appRecipeDropdown]"
})
export class RecipeDropdownDirective {
  @HostListener("click") toggleOpen() {
    document
      .querySelector(".dropdown-menu.recipe-dropdown")
      .classList.toggle("show");
  }
}
