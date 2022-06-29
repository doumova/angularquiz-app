import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelecomeComponent } from './welecome/welecome.component';

const routes: Routes = [
  {path:'', redirectTo:'welecome', pathMatch:"full"},
  {path: "", component: WelecomeComponent},
  {path: "question", component: QuestionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
