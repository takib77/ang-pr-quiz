import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quizList: Observable<Quiz[]> = this.quizservice.quizList$;

  constructor(
    private quizservice: QuizService
  ) { }

  ngOnInit(): void {
    this.quizservice.getAllQuiz();
  }

  delQuiz(quiz: Quiz): void {
    if (!confirm('Are you sure to delete?'))
      return;
    this.quizservice.removeQuiz(quiz).subscribe(
      () => (this.quizservice.getAllQuiz())
    )
  }

}
