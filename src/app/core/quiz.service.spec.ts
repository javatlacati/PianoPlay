/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { QuizService } from './quiz.service';

describe('PianoQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService]
    });
  });

  it('should ...', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));
});
