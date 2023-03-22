import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CheckboxAnswer } from 'src/app/interface/checkbox-answers';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddQuestionComponent>) {}

  answerArray: CheckboxAnswer[] = [{ id: 1, value: '' }];
  answerType: string = 'paragraph';
  question: string = '';

  ngOnInit(): void {}

  addAnotherAnswer(): void {
    this.answerArray.push({ id: this.answerArray.length, value: '' });
  }

  submit(): void {
    this.dialogRef.close({
      question: this.question,
      answerType: this.answerType,
      answerList: this.answerArray,
    });
  }
}
