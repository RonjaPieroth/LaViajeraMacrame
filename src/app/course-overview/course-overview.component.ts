import { Component } from '@angular/core';
import {Course} from '../course';
import {CourseService} from '../course.service';
import {Participant} from '../participant';

@Component({
  selector: 'app-class-overview',
  templateUrl: './course-overview.component.html',
  styleUrl: './course-overview.component.css'
})
export class CourseOverviewComponent {
courseList: Course[];

constructor(private courseService: CourseService) {
  this.courseList = courseService.getCourses();
}


}
