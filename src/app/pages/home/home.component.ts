import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quizList: Observable<Quiz[]> = this.quizservice.quizList$;

  constructor(
    private quizservice: QuizService
  ) { }

  ngOnInit(): void {
    this.quizservice.getAllQuiz();
  }

}
