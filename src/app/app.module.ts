import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizEditorComponent } from './common/quiz-editor/quiz-editor.component';
import { QuestionEditorComponent } from './common/question-editor/question-editor.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizEditorComponent,
    QuestionEditorComponent,
    QuizComponent,
    HomeComponent,
    NavigationComponent,
    FilterPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
