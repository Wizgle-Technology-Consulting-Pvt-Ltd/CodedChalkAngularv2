import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormControl} from '@angular/forms';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';
import { jobList } from './jobList.data';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.scss']
})
// export class JobApplicationFormComponent {


// }

export class JobApplicationFormComponent  implements OnInit {

  courseDetails: any;
  jobAppForm!: UntypedFormGroup;
  id: any;
  submit!: boolean;
  siteKey!:string;
  hideForm!: boolean;
  jobList!: any[];



  constructor(
    private formBuilder: UntypedFormBuilder,
    ) {}

  ngOnInit() {
    this.jobList = jobList;
    this.siteKey = '6LebB0UoAAAAAJWrojnDMQ4CL0xD7fgAr2Dd3yU1';
    // console.log(this.courseDetails);

      /**
     * Bootstrap Contact form data
     */
       this.jobAppForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        contactNumber: ['',[Validators.required, Validators.pattern('^[0-9]{10}')]],
        experience: ['', [Validators.required]],
        additionalInfo: ['', [Validators.required]],
        // opening: [''],
        email: ['', [Validators.required, Validators.email]],
        // checkbox: ['', Validators.required],
        // recaptcha: [''],
        jobList: new FormControl(''),
      });
  }

  public sendEmail() {
    // console.log('status', this.contactForm.status)
    let emailObj: any = {};
    emailObj.firstName = this.jobAppForm.value.firstName;
    emailObj.lastName = this.jobAppForm.value.lastName;
    emailObj.email = this.jobAppForm.value.email;
    emailObj.contactNumber = this.jobAppForm.value.contactNumber;
    emailObj.experience = this.jobAppForm.value.experience;
    emailObj.additionalInfo = this.jobAppForm.value.additionalInfo;
    emailObj.jobList = this.jobAppForm.value.jobList;
    emailObj.fileAttach = this.jobAppForm.value.fileAttach;

    // emailObj.recaptcha = this.jobAppForm.value.recaptcha;

    emailjs.send('service_n7gqj7m', 'template_llfr3oh', emailObj, 'WY5dnPsZIciHagA0P')
      .then((result: EmailJSResponseStatus) => {
        this.jobAppForm.reset();
        this.hideForm = true;
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      });


  }

   get form() {
    return this.jobAppForm.controls;
  }

}
