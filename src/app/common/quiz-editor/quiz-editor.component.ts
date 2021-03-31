import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuestionService } from 'src/app/service/question-service';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss']
})
export class QuizEditorComponent implements OnInit {

  quiz: Quiz = new Quiz();
  quests: Observable<Question[]> | undefined = this.questionservice.questionList$

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private quizservice: QuizService,
    private questionservice: QuestionService
  ) { }

  ngOnInit(): void {
    this.questionservice.getAllQuestion();
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.quiz = new Quiz();
        }
        else
          this.quizservice.getQuiz(params.id).subscribe(
            item => {
              this.quiz = item;
            })
      })
  }

  onSubmit(form: NgForm, quiz: Quiz): void {
    if (quiz.id === 0) {
      this.quizservice.createQuiz(quiz).subscribe(() => { });
      this.router.navigate(['/admin'])
    } else {
      this.quizservice.updateQuiz(quiz).subscribe(() => { });
      this.router.navigate(['/admin']);
    }
  }

}
