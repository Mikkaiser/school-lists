import { Component, OnInit } from '@angular/core';
import Student from './student.interface';

@Component({
  selector: 'school-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  
  ngOnInit(): void {
    function generateId() {
      let randomNumber = Math.floor(Math.random() * 99) + 1;
      return randomNumber;
    }
    this.students = [
      {
        id: generateId(),
        name: 'Mikkaiser',
        class: '1° year',
        age: 17
      },
      {
        id: generateId(),
        name: 'Mikaelzinho',
        class: '9° year',
        age: 19
      },
      {
        id: generateId(),
        name: 'Musneyer',
        class: '2° year',
        age: 18
      },
      {
        id: generateId(),
        name: 'Musny',
        class: '6° year',
        age: 20
      }
    ]
  }
}
