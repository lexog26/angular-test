import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/students/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {

  student: Student;
  protected studentService: StudentService;
  public form: FormGroup;


  constructor(studentService: StudentService, private formBuilder: FormBuilder){
     this.student = new Student();
     this.studentService = studentService;
     this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(),
      birthdate: new FormControl('')
    });
  }

  ngOnInit() {

    // this.name.valueChanges.subscribe(result => console.log(result));
  }

  createStudentHandler(): void{
    console.log('create student handler called');
    if (this.form.valid) {
      console.log('create form valid');
      this.student = this.form.value as Student;
      console.log(this.student);
      this.studentService.createStudent(this.student);
      console.log(this.studentService.getAll());
    }
  }

}
