import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any;

  constructor(private courseService: CourseService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.courseService.getCourseList().subscribe(
      result => {
          this.courses = result;
          console.log(this.courses);
      }
   );
  }
  goToDetails(id: any){
  this.router.navigate(['/course-detail/' +id])
  }

}

