import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
@Injectable()
export class StudentService {

  private students = [
    {
      id: 1,
      email: 'arnold@gmail.com',
      name: 'Max',
      lastName: 'Arnold',
      age: 32,
      birthdate: new Date('10/2/2020')
    },
    {
      id: 2,
      email: 'jhon@gmail.com',
      name: 'Jhon',
      lastName: 'Moe',
      age: 24,
      birthdate: new Date('03/05/1984')
    },
    {
      id: 3,
      email: 'jimmy@hotmail.com',
      name: 'Jimmy',
      lastName: 'Raynor',
      age: 50,
      birthdate: new Date('12/12/1970')
    }
  ];

  constructor() { }

  getAll(): Array<Student> {
    return this.students;
  }

  getById(id: number): Student {
    // return this.students[id];
    return this.students.find(std => std.id === id) as Student;
  }

  createStudent(student: Student): Student {
    student.id = this.students.push(student);
    return student;
  }
}
