import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentService } from '../services/students/student.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [StudentDetailsComponent, StudentCreateComponent],
  providers: [StudentService],
  exports: [StudentCreateComponent, StudentDetailsComponent]
})
export class StudentsModule { }
