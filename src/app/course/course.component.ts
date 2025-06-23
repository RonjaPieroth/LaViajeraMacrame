import {Component, Input, input} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
@Input() course?: Course;
}
