import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-log-detail',
  templateUrl: './change-log-detail.component.html',
  styleUrls: ['./change-log-detail.component.css']
})
export class ChangeLogDetailComponent implements OnInit {
  isLoading: boolean = true
  changeLogForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.isLoading = false
  }

}
