import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-schedule-detail',
  templateUrl: './change-schedule-detail.component.html',
  styleUrls: ['./change-schedule-detail.component.css']
})
export class ChangeScheduleDetailComponent implements OnInit {
  isLoading: boolean = true
  shiftList = [{
    id: 0,
    description: "Shift 1"
  },
  {
    id: 0,
    description: "Shift 2"
  }]
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
