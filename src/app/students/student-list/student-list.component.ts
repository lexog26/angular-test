import { Student } from './../../models/student';
import { StudentService } from './../../services/students/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Array<Student>;
  protected studentService: StudentService;
  constructor(studentService: StudentService) {
    this.studentService = studentService;
    this.students = new Array<Student>();
   }

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

}
