import { Student } from './../../core/models/student';
import { StudentService } from './../../core/services/students/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;
  studentService: StudentService;

  constructor(private activeRoute: ActivatedRoute, studentService: StudentService) {
    this.studentService = studentService;
    this.student = new Student();
   }

  ngOnInit(): void {
    // Get the student id from the current route.
    // const routeParams = this.activeRoute.snapshot.paramMap;

    // const id = Number(this.activeRoute.snapshot.params.id); // Number(routeParams.get('id'));

    this.activeRoute.params.subscribe ( r =>
      {
        this.studentService.getById(Number(r.id)).subscribe(studentObs => this.student = studentObs);
      });

    // Find the student based on id url param
    //this.student = this.studentService.getById(id);
  }

}
