import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { caseStudiesData } from './case-studies-data';

@Injectable({
  providedIn: 'root'
})
export class CaseStudiesService {

  constructor() { }

  getCaseStudiesList(){
    return of(caseStudiesData);
  }

  getCaseStudiesByID(id: any) {
      return caseStudiesData.find(x => x.id === id);
  }
}

