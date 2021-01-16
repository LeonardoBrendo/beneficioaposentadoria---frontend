
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { BeneficioCrudComponent } from "./views/beneficio-crud/beneficio-crud.component";
import { BeneficioCreateComponent } from './components/beneficio/beneficio-create/beneficio-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "beneficio",
    component: BeneficioCrudComponent
  },
  {
    path: "beneficio/create",
    component: BeneficioCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
