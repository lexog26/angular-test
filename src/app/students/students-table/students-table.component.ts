import { StudentService } from './../../core/services/students/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  constructor(studentServ: StudentService) { }

  ngOnInit(): void {
  }

}
