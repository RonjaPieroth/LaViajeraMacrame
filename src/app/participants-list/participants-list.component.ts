import {Component, Input} from '@angular/core';
import {Course} from '../course';
import {CourseService} from '../course.service';
import {Participant} from '../participant';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrl: './participants-list.component.css'
})
export class ParticipantsListComponent {
@Input() course!: Course

  constructor(private courseService: CourseService) {
  }

  delete(participant: Participant){
  this.courseService.removeParticipant(this.course.id, participant);
  }
}
