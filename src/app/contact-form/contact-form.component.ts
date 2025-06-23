import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm: FormGroup = new FormGroup({
  name: new FormControl("",Validators.required),
  email: new FormControl("",[Validators.required, Validators.email]),
  phone: new FormControl(),
  requestType: new FormControl("", Validators.required),
  message: new FormControl("",Validators.required)
  })

  onSubmit(){
    if (this.contactForm.valid){
      const form = document.createElement('form');
      form.action = 'https://formsubmit.co/laviajeramacrame@gmail.com';
      form.method = 'POST';

      for (const key of Object.keys(this.contactForm.value)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = this.contactForm.value[key];
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();
    }
  }

}
