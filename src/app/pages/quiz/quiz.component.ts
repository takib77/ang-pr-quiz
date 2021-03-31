import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz = new Quiz();
  quizList: Observable<Quiz[]> = this.quizservice.quizList$;
  points: number = 0;

  constructor(
    private quizservice: QuizService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.quizservice.getAllQuiz();
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

  calculator(point: number): void {
    this.points = this.points + point;
  }

}
