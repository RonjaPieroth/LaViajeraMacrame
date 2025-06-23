import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../course';
import {CourseService} from '../course.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nextCourse: Course|null;

  constructor(private router: Router, private courseService: CourseService) {
    this.nextCourse = courseService.getNextCourse();
  }

  navigateToCourses(): void {
    this.router.navigate(['/courses']);

  }
}
