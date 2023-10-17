import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerService } from './career.service';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.scss']
})
export class CareerDetailComponent {

  jobOpening : any;
  id: any;
  careerDetails:any;
  constructor(public router: Router, 
    private activeRoute : ActivatedRoute,
   private careerService : CareerService ) {

  }
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
      this.careerDetails = this.careerService.getCareerByID(this.id); 
  }
 
}
