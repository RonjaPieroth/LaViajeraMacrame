import { Injectable } from '@angular/core';
import {courseData} from './course.data';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[]{
    return courseData;
  }

  getCourse( id: string): Course{
    return <Course>this.getCourses().find(course => course.id == id)
  }


  getNextCourse(): Course| null{
    let sortedCourses: Course[] = this.getCourses().filter(course => course.nextGroupClass && course.nextGroupClass > new Date()).sort((course1, course2)=> course1.nextGroupClass!.getTime() - course2.nextGroupClass!.getTime());

    return sortedCourses.length > 0? sortedCourses[0] : null;
  }
}
