import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-business-detail',
  templateUrl: './official-business-detail.component.html',
  styleUrls: ['./official-business-detail.component.css']
})
export class OfficialBusinessDetailComponent implements OnInit {
  isLoading: boolean = true
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
