import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {interval, map, Observable} from "rxjs";
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sandbox-nx-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DateComponent  {

  model!: NgbDateStruct;
  date!: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
