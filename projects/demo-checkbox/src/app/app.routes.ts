import { Routes } from "@angular/router";
import { DemoCheckboxComponent } from "./demo-checkbox/demo-checkbox.component";
import { DemoHomeComponent } from "./shared/demo-home.component";

export const routes: Routes = [
  { path: "", redirectTo: "checkbox", pathMatch: "full" },
  { path: "home", component: DemoHomeComponent },
  { path: "checkbox", component: DemoCheckboxComponent },
];
