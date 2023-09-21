import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coursesV1 } from './course-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseList(){
    return of(coursesV1);
  }

  getCourseByID(id: any) {
      return coursesV1.find(x => x.id === id);
  }
  
}
