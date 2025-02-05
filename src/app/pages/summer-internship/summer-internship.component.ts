import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-summer-internship',
  templateUrl: './summer-internship.component.html',
  styleUrls: ['./summer-internship.component.scss']
})
export class SummerInternshipComponent {
  contactForm: any;
  isLoading = false; 
  isSubmitted = false; 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    emailjs.init('7sg0BLieEx-8czNpM'); 

    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z\\s]+$')]],
      last_name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z\\s]+$')]],
      company: [''],
      email: ['', [Validators.required, Validators.email, this.yopmailValidator]],
      subscribe: [false]
    });
  }

  yopmailValidator(control: AbstractControl): ValidationErrors | null {
    const forbiddenDomain = 'yopmail.com';
    if (control.value && control.value.endsWith(`@${forbiddenDomain}`)) {
      return { yopmailNotAllowed: true };
    }
    return null;
  }

  sendEmail(event: Event) {
    event.preventDefault(); 
    this.isLoading = true; 

    const form = event.target as HTMLFormElement;
    
    const formData = new FormData(form);
    const data = {
      to_name: 'Admin',
      from_name: `${formData.get('first_name')} ${formData.get('last_name')}`,
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      user_email: formData.get('email'),
      user_company: formData.get('company') || 'N/A',
    };

    emailjs.send('service_l03pvib', 'template_zdx0vhj', data)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.isLoading = false; 
          this.isSubmitted = true; 
          this.contactForm.reset(); 
        },
        (error) => {
          console.error('FAILED...', error);
          this.isLoading = false; 
          alert('Failed to send email. Please try again later.');
        }
      );
  }
}



