import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  phrase: string = '';
  phraseControl: FormControl = new FormControl('');

  direction: number = 1;
  columnKey: string = '';

  constructor(
    private quizservice: QuizService
  ) { }

  ngOnInit(): void {
    this.quizservice.getAllQuiz();
    this.phraseControl.valueChanges.pipe(
    ).subscribe(
      newValue => this.phrase = newValue
    );
  }

  delQuiz(quiz: Quiz): void {
    if (!confirm('Are you sure to delete?'))
      return;
    this.quizservice.removeQuiz(quiz).subscribe(
      () => (this.quizservice.getAllQuiz())
    )
  }

  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction = this.direction * -1;
    } else {
      this.direction = 1;
    }
    this.columnKey = key;
  }

}
