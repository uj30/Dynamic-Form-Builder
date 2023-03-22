import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionList } from '../interface/question-list';
import { AddQuestionComponent } from '../modal/add-question/add-question.component';
import { AnswerService } from '../service/answer.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private answerService: AnswerService
  ) {}

  listOfQuestion: QuestionList[] = [];
  dynamicForm: FormGroup = new FormGroup({});

  ngOnInit() {}

  openAddQuestionModal(): void {
    const dialogRef: MatDialogRef<AddQuestionComponent> = this.dialog.open(
      AddQuestionComponent,
      { disableClose: true, width: '400px' }
    );
    dialogRef.afterClosed().subscribe((data: QuestionList) => {
      this.listOfQuestion.push(data);

      const formGroup: any = {};
      this.listOfQuestion.forEach((formControl, index) => {
        if (formControl.answerType === 'paragraph') {
          formGroup[`Ques${index}`] = new FormControl(
            this.dynamicForm.get(`Ques${index}`)?.value,
            Validators.required
          );
        } else {
          formGroup[`Ques${index}`] = this.checkboxAnswers(formControl);
        }
      });
      this.dynamicForm = new FormGroup(formGroup);
    });
  }

  checkboxAnswers(formControl: QuestionList) {
    const arr = formControl.answerList.map(() => {
      return new FormControl(false);
    });
    return new FormArray(arr);
  }

  reviewMyAnswer(): void {
    this.answerService.setAnswers({
      question: this.listOfQuestion,
      answers: this.dynamicForm.value,
    });
    this.router.navigate(['/form/answers']);
  }
}
