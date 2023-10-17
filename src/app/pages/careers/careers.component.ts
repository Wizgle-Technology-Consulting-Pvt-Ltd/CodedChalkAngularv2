import { Component } from '@angular/core';
import { jobsOpenings } from '../contact/contact.data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  jobOpening : any;
  id: any;
  constructor(public router: Router, public route: ActivatedRoute) {
}

ngOnInit(): void {
    this.jobOpening = jobsOpenings
}

goToDetails(id:any){
  this.router.navigate(['/career-detail/' +id])
}
}
