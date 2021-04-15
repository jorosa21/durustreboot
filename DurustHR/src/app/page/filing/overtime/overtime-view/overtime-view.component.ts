import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overtime-view',
  templateUrl: './overtime-view.component.html',
  styleUrls: ['./overtime-view.component.css']
})
export class OvertimeViewComponent implements OnInit {
  isLoading: boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
