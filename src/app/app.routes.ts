import { Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {InterestsComponent} from "./components/interests/interests.component";
import {MyProjectsComponent} from "./components/my-projects/my-projects.component";

export const routes: Routes = [
  {
    path:"about",
    component: AboutComponent,
  },
  {
    path:"experience",
    component: ExperienceComponent,
  },
  {
    path:"skills",
    component: SkillsComponent,
  },
  {
    path:"interests",
    component: InterestsComponent,
  },
  {
    path:"my-projects",
    component: MyProjectsComponent,
  },
  {
    path: "calculator",
    loadChildren: () => import('./modules/calculator/calculator-routing.module').then(m => m.CalculatorRoutingModule)
  },
  {
    path: "sudoku",
    loadChildren: () => import('./modules/sudoku/sudoku-routing.module').then(m => m.SudokuRoutingModule)
  },
  {
    path:"",
    redirectTo: "about",
    pathMatch:"full"
  },

];
