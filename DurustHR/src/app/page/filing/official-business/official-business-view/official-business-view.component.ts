import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-business-view',
  templateUrl: './official-business-view.component.html',
  styleUrls: ['./official-business-view.component.css']
})
export class OfficialBusinessViewComponent implements OnInit {
  isLoading: boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
