import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from '@emailjs/browser';  
import { EmailJSResponseStatus } from '@emailjs/browser'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  successMessage: string = ''; 
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  sendEmail(): void {
    if (this.contactForm.valid) {
      const templateParams = {
        user_email: this.contactForm.value.email,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        phoneNumber: this.contactForm.value.phoneNumber,
        title: this.contactForm.value.title,
        description: this.contactForm.value.description
      };

      emailjs.send('service_i8rh38g', 'template_9jlv57e', templateParams, 'Q2E5Daix_MqxsG2hD')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.successMessage = 'Your message has been sent successfully!';
        this.contactForm.reset(); 
      }, (err) => {
        console.error('FAILED...', err);
      });
}
  }
}