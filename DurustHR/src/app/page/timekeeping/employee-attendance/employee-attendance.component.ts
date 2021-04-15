import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {
  isLoading: boolean = true
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.isLoading = false
  }

  openLogModal(content, id) {
    console.log(id)
    this.modalService.open(content)
  }
}
