import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { SuccessComponent } from "./components/succes/success.component";

const appRoutes: Routes = [
  {
    path: "",
    component: LoginComponent
  }, 
  {
    path: "success",
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true, scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRouterModule {}