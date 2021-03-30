import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quiz = new Quiz();

  constructor() { }

  ngOnInit(): void {
  }

}
