import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  courses: any;
  
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    debugger;

    this.courseService.getCourseList().subscribe( 
      result => {
          this.courses = result; 
          console.log(this.courses);
      }
   );
  }
  
}

