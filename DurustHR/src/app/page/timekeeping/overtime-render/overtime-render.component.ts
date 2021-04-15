import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overtime-render',
  templateUrl: './overtime-render.component.html',
  styleUrls: ['./overtime-render.component.css']
})
export class OvertimeRenderComponent implements OnInit {
  isLoading: boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}
