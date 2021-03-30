import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss']
})
export class QuizEditorComponent implements OnInit {

  quiz: Quiz = new Quiz();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private quizservice: QuizService
  ) { }

  ngOnInit(): void {
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
