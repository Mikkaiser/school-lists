import { Component, OnInit } from '@angular/core';
import Teacher from './teacher.interface';

@Component({
  selector: 'school-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = [];
  ngOnInit(): void {
    function generateId() {
      let randomNumber = Math.floor(Math.random() * 99) + 1;
      return randomNumber;
    }
    this.teachers = [
      {
        id: generateId(),
        name: 'Flávio',
        graduateIn: 'Havard',
        age: 36
      },
      {
        id: generateId(),
        name: 'Leyla',
        graduateIn: 'Oxford',
        age: 25
      },
      {
        id: generateId(),
        name: 'Marcos César',
        graduateIn: 'UFAL',
        age: 43
      },
      {
        id: generateId(),
        name: 'Marcos Alves',
        graduateIn: 'Stanford',
        age: 40
      }
    ];
  }

}
