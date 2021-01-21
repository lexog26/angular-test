import { ApiService } from './../api/api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Student } from './../../models/student';
import { Observable } from 'rxjs';
@Injectable()
export class StudentService {

  studentsRootUrl = environment.students_api_url;

  constructor(private apiService: ApiService) {
    this.apiService.setApiUrl = this.studentsRootUrl;
   }

  getAll(): Observable<Array<Student>> {
    return this.apiService.get(`/students`);
    // .subscribe (
    //  (data: Array<Student> => this.students),
    //  () => ({})/** Error handling callback */,
    //  () => ({})/** Done with the observable */,
    // );
  }

  getById(id: number): Observable<Student> {
    return this.apiService.get(`/students/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.apiService.post(`/students`, JSON.stringify(student));
  }
}
