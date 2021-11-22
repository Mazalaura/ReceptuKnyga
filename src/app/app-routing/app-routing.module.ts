import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RasomiComponent } from "../receptai/rasomi/rasomi.component";
import { SkaitomiComponent } from "../receptai/skaitomi/skaitomi.component";
import { AuthService } from "../service/auth.service";

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
      path: 'dashboard', component: DashboardComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'skaitomi',
      component:SkaitomiComponent
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