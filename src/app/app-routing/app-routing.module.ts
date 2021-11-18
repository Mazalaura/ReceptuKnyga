import { identifierModuleUrl } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RasomiComponent } from "../receptai/rasomi/rasomi.component";
import { SkaitomiAprasymasComponent } from "../receptai/skaitomi/skaitomi-aprasymas/skaitomi-aprasymas.component";
import { SkaitomiComponent } from "../receptai/skaitomi/skaitomi.component";


const appRoutes:Routes=[
    {
      path:'auth/:action',
      component:AuthComponent
  },
    {
      path: '',
      component:DashboardComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'skaitomi',
      component:SkaitomiComponent
    },
    {
      path: 'skaitomi-aprasymas',
      component:SkaitomiAprasymasComponent
    },
    {
      path:'rasomi',
      component:RasomiComponent,
      canActivate:[AuthGuard]
    }

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation:'reload'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }