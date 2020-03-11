import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


const routes: Routes = [

  {
    path: "",
    component: HomePageComponent
  },
  {
    path:"welcome",
    component: WelcomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
