import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseStudiesService } from 'src/app/services/case-studies.service';

@Component({
  selector: 'app-case-studies-details',
  templateUrl: './case-studies-details.component.html',
  styleUrls: ['./case-studies-details.component.scss']
})

export class CaseStudiesDetailsComponent implements OnInit {
  id: any;
  caseStudiesDetails: any;

  constructor(private caseStudiesService: CaseStudiesService,
    private activeRoute: ActivatedRoute,
    ) {}
  ngOnInit() {
  this.id = this.activeRoute.snapshot.paramMap.get("id");
  this.caseStudiesDetails = this.caseStudiesService.getCaseStudiesByID(this.id);
  }
}
