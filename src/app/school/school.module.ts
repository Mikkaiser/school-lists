import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { SchoolContainerComponent } from './containers/container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StudentComponent,
    TeacherComponent,
    SchoolContainerComponent,
    PageTitleComponent
  ],
  exports: [
    SchoolContainerComponent
  ]
})
export class SchoolModule { }
