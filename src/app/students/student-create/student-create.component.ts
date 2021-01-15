import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/students/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(studentService: StudentService) { }

  ngOnInit() {
  }

}
