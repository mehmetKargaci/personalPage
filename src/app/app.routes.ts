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
    loadChildren: () => import('./modules/calculator/calc.module').then(m => m.CalcModule)
  },
  {
    path: "sudoku",
    loadChildren: () => import('./modules/sudoku/sudoku.module').then(m => m.SudokuModule)
  }

];
