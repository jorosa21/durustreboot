import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offset-view',
  templateUrl: './offset-view.component.html',
  styleUrls: ['./offset-view.component.css']
})
export class OffsetViewComponent implements OnInit {
  isLoading: boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
