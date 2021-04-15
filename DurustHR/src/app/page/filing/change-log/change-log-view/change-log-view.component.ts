import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-log-view',
  templateUrl: './change-log-view.component.html',
  styleUrls: ['./change-log-view.component.css']
})
export class ChangeLogViewComponent implements OnInit {
  isLoading:  boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
