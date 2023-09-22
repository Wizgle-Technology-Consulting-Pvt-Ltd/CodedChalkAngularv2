import { Component, OnInit  } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-details-v1',
  templateUrl: './course-details-v1.component.html',
  styleUrls: ['./course-details-v1.component.scss']
})
export class CourseDetailsV1Component  implements OnInit {

  courseDetails: any;
  contactForm!: UntypedFormGroup;
  id: any;
  submit!: boolean;
  siteKey!:string;
  hideForm!: boolean;


  constructor(private courseService: CourseService,
    private formBuilder: UntypedFormBuilder,
    private activeRoute: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.courseDetails = this.courseService.getCourseByID(this.id);
    this.siteKey = '6LebB0UoAAAAAJWrojnDMQ4CL0xD7fgAr2Dd3yU1';
    // console.log(this.courseDetails);

      /**
     * Bootstrap Contact form data
     */
       this.contactForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        companyName: [''],
        email: ['', [Validators.required, Validators.email]],
        checkbox: ['', Validators.required],
        recaptcha: [''],
      });
  }

  public sendEmail() {
    // console.log('status', this.contactForm.status)
    let emailObj: any = {};
    emailObj.firstName = this.contactForm.value.firstName;
    emailObj.email = this.contactForm.value.email;
    emailObj.lastName = this.contactForm.value.lastName;
    emailObj.companyName = this.contactForm.value.companyName;
    emailObj.courseName = this.courseDetails.overview.title;
    emailObj.recaptcha = this.contactForm.value.recaptcha;

    emailjs.send('service_n7gqj7m', 'template_5nou2do', emailObj, 'WY5dnPsZIciHagA0P')
      .then((result: EmailJSResponseStatus) => {
        this.contactForm.reset();
        this.hideForm = true;
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      });
  }


  get form() {
    return this.contactForm.controls;
  }

}
