import { Component } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Employee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
