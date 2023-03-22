import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private answers = new BehaviorSubject<any>({});
  selectedAnswers = this.answers.asObservable();

  constructor() {}

  setAnswers(ans: any) {
    this.answers.next(ans);
  }
}
