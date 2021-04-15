import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {
  isLoading: boolean = true
  leaveList = [{
    id: 0,
    description: 'Sick Leave'
  },
  {
    id: 0,
    description: 'Vacation Leave'
  }]
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
