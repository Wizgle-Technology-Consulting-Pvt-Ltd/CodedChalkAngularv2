import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { jobsOpenings } from '../contact/contact.data';


@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor() { }

  getBlogList(){
    return of(jobsOpenings);
  }
  
  getCareerByID(id: any) {
      return jobsOpenings.find(x => x.id == id);
  }
}
