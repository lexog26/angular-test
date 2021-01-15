import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
@Injectable()
export class StudentService {

  private students = [
    {
      id: 1,
      name: 'Max',
      lastName: 'Arnold',
      age: 32
    },
    {
      id: 2,
      name: 'Jhon',
      lastName: 'Moe',
      age: 24
    },
    {
      id: 3,
      name: 'Jimmy',
      lastName: 'Raynor',
      age: 50
    }
  ];

  constructor() { }

  getAll(): Array<Student> {
    return this.students;
  }

  getById(id: number): Student {
    return this.students[id];
  }

  createStudent(student: Student): Student {
    student.id = this.students.push(student);
    return student;
  }
}
