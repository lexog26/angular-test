import { StudentService } from './../../services/students/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student: any;
  studentService: StudentService;

  constructor(private activeRoute: ActivatedRoute, studentService: StudentService) {
    this.studentService = studentService;
   }

  ngOnInit(): void {
    // Get the student id from the current route.
    // const routeParams = this.activeRoute.snapshot.paramMap;

    // const id = Number(this.activeRoute.snapshot.params.id); // Number(routeParams.get('id'));

    this.activeRoute.params.subscribe ( r =>
      {
        this.student = this.studentService.getById(Number(r.id));
      });

    // Find the student based on id url param
    //this.student = this.studentService.getById(id);
  }

}
