import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
  name: new FormControl("",Validators.required),
  email: new FormControl("",[Validators.required, Validators.email]),
  phone: new FormControl(),
  requestType: new FormControl("", Validators.required),
  message: new FormControl("",Validators.required)
  })

}
