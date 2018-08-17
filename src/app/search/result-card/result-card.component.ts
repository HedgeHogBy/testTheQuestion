import { Component, Input } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent{
  @Input() question: Question;
}
