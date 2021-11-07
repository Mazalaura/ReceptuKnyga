import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RasomiComponent } from './receptai/rasomi/rasomi.component';
import { SkaitomiComponent } from './receptai/skaitomi/skaitomi.component';
import { SkaitomiAprasymasComponent } from './receptai/skaitomi/skaitomi-aprasymas/skaitomi-aprasymas.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddIngredientComponent } from './receptai/rasomi/add-ingredient/add-ingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    RasomiComponent,
    SkaitomiComponent,
    SkaitomiAprasymasComponent,
    NavigationComponent,
    AddIngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
