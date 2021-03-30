import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionEditorComponent } from './common/question-editor/question-editor.component';
import { QuizEditorComponent } from './common/quiz-editor/quiz-editor.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'question/:id', component: QuestionEditorComponent },
  { path: 'admin/quiz/:id', component: QuizEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
