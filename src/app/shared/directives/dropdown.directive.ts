import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.show") isOpen = false;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
    document
      .querySelector(".dropdown-menu.navbar-dropdown")
      .classList.toggle("show");
  }
}
