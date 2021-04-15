import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-view',
  templateUrl: './leave-view.component.html',
  styleUrls: ['./leave-view.component.css']
})
export class LeaveViewComponent implements OnInit {
  isLoading: boolean =  true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
