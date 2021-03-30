import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionEditorComponent } from './pages/question-editor/question-editor.component';
import { QuizEditorComponent } from './pages/quiz-editor/quiz-editor.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'question/:id', component: QuestionEditorComponent },
  { path: 'quiz/:id', component: QuizEditorComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
