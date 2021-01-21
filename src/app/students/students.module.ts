import { MatListModule } from '@angular/material/list';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentService } from '../core/services/students/student.service';
import { StudentsTableComponent } from './students-table/students-table.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentDetailsComponent,
    StudentCreateComponent,
    StudentListComponent,
    StudentsTableComponent
  ],
  providers: [
    StudentService
  ],
  exports: [StudentCreateComponent, StudentDetailsComponent]
})
export class StudentsModule { }
