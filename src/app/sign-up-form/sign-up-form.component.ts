import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Participant} from '../participant';
import {CourseService} from '../course.service';
import {Course} from '../course';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent implements OnInit{
  signUpForm!: FormGroup;
  id: string;
  hasSubmitted: boolean = false;
  course: Course;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private courseService: CourseService, private router: Router) {
    this.id = <string>route.snapshot.paramMap.get("id");
    this.course = courseService.getCourse(this.id);
  }

  ngOnInit(): void {
    this.signUpForm= this.fb.group({
      firstname: ["", [Validators.required]],
      lastname:  ["", [Validators.required]],
      email: ["", [Validators.required]]
    })
  }

  submitRegistration(): void{
    console.log(this.signUpForm.value);
    let newParticipant: Participant = {firstname: this.signUpForm.get("firstname")!.value, lastname: this.signUpForm.get("lastname")!.value, mailAddress: this.signUpForm.get("email")!.value};
    this.courseService.addParticipant(this.id, newParticipant);
    this.hasSubmitted= true;
  }

  back(): void{
    this.router.navigate(["courses"]);
  }

  registerAgain(): void {
    this.hasSubmitted = false;
    this.signUpForm.reset();  // Setzt alle Felder im Formular zurück
  }


}
