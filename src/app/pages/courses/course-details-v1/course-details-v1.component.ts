import { Component, OnInit  } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details-v1',
  templateUrl: './course-details-v1.component.html',
  styleUrls: ['./course-details-v1.component.scss']
})
export class CourseDetailsV1Component  implements OnInit {
  
  courseDetails: any;
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseDetails = this.courseService.getCourseByID('002');
    console.log(this.courseDetails);
  }

 
}
