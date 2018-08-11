import {Component, Input, OnInit} from '@angular/core';

interface Question {
  title: string;
  cover?: {
    thumbnailUrl: string
  };
  slug: string;
}

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
