import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionList } from '../interface/question-list';
import { AnswerService } from '../service/answer.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent implements OnInit {
  constructor(private router: Router, private answerService: AnswerService) {}

  question: QuestionList[] = [];
  answer: any;

  ngOnInit(): void {
    this.answerService.selectedAnswers.subscribe(
      (value: { question: []; answers: {} }) => {
        this.question = value.question;
        this.answer = value.answers;
      }
    );
  }

  backToFormBuilder() {
    this.router.navigate(['/form/builder']);
  }
}
