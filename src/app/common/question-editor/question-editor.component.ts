import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuestionService } from 'src/app/service/question-service';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  question: Question = new Question();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionservice: QuestionService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.question = new Question();
        }
        else
          this.questionservice.getQuestion(params.id).subscribe(
            item => {
              this.question = item;
            })
      })
  }

  onSubmit(form: NgForm, question: Question): void {
    if (question.id === 0) {
      this.questionservice.createQuestion(question).subscribe(() => { });
      this.router.navigate(['/admin'])
    } else {
      this.questionservice.updateQuestion(question).subscribe(() => { });
      this.router.navigate(['/admin']);
    }
  }

}
