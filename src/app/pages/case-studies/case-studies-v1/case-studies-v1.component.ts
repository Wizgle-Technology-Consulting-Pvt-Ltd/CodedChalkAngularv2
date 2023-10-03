import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseStudiesService } from 'src/app/services/case-studies.service';

@Component({
  selector: 'app-case-studies-v1',
  templateUrl: './case-studies-v1.component.html',
  styleUrls: ['./case-studies-v1.component.scss']
})
// export class CaseStudiesV1Component implements OnInit {

// }
export class CaseStudiesV1Component implements OnInit {

  caseStudies: any;

  constructor(private caseStudiesService: CaseStudiesService,
    private router: Router) {}

  ngOnInit() {
    this.caseStudiesService.getCaseStudiesList().subscribe(
      result => {
          this.caseStudies = result;
          console.log(this.caseStudies);
      }
   );
  }

  goToDetails(id: any){
    this.router.navigate(['/case-studies-detail/' +id])
    }
}
