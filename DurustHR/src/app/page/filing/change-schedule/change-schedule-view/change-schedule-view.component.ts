import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-schedule-view',
  templateUrl: './change-schedule-view.component.html',
  styleUrls: ['./change-schedule-view.component.css']
})
export class ChangeScheduleViewComponent implements OnInit {
  isLoading: boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
