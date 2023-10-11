import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs , { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup;
  hideForm!: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the form with form controls and validators
    this.form = this.formBuilder.group({
      firstname : ["",[Validators.required]],
      lastname: ["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      phone: ["",[Validators.required]],
      title: ["",[Validators.required]],
      description:["",[Validators.required]],
    });
   
}
ngOnInit(): void {
    
}

onSubmit() {
  debugger;
  if(this.form.valid) {
    let emailObj: any = {};
    emailObj.firstName = this.form.value.firstName;
    emailObj.lastName = this.form.value.lastName;
    emailObj.email = this.form.value.email;
    emailObj.phone = this.form.value.phone;
    emailObj.title = this.form.value.title;
    emailObj.description= this.form.value.description;

    emailjs.send('service_r315ljj', 'template_4t09j3a', emailObj, 'Q2E5Daix_MqxsG2hD')
      .then((result: EmailJSResponseStatus) => {
        // this.form.reset();
        this.hideForm = true;
        alert("you have succesfully registration.")
        this.router.navigate(['/'])
      },

      (error) => {
        console.log(error.text);
      });

      this.form.reset();
  }
  }
}

