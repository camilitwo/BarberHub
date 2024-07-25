import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WelcomeComponent },

];
