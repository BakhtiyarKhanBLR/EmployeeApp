import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {

  employees = [
    {
      id: 101,
      name: 'Bakhtiyar Khan',
      department: 'IT',
      salary: 75000
    },
    {
      id: 102,
      name: 'Tahseen Akram (Azaan)',
      department: 'HR',
      salary: 65000
    },
    {
      id: 103,
      name: 'MR.I Khan',
      department: 'Director',
      salary: 200000
    }
  ];

}
