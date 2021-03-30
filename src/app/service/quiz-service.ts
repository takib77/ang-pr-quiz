import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  dataSource: string = 'http://localhost:3000/quizzes';
  quizList$: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getAllQuiz(): void {
    this.http.get<Quiz[]>(this.dataSource).subscribe(
      quizzes => this.quizList$.next(quizzes)
    );
  }

  getQuiz(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.dataSource}/${id}`);
  }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.dataSource, quiz);
  }

  updateQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.patch<Quiz>(`${this.dataSource}/${quiz.id}`, quiz);
  }

  removeQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.delete<Quiz>(`${this.dataSource}/${quiz.id}`);
  }

}
