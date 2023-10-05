import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseStudiesService } from 'src/app/services/case-studies.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
// export class CaseStudiesV1Component implements OnInit {

// }
export class CasesComponent implements OnInit {

  caseStudies: any;

  constructor(private caseStudiesService: CaseStudiesService,
    private router: Router) { }

  ngOnInit() {
    this.caseStudiesService.getCaseStudiesList().subscribe(
      result => {
        this.caseStudies = result;
        console.log(this.caseStudies);
      }
    );
  }

  goToDetails(id: any) {
    this.router.navigate(['/case-detail/' + id])
  }

  checkOddEvent(i: any){
    if(i % 2 ==0){
      return true;
    }
    else{
      return 0;
    }
  }
}
