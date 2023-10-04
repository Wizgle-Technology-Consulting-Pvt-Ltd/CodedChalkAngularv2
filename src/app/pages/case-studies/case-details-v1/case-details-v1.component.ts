import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseStudiesService } from 'src/app/services/case-studies.service';

@Component({
  selector: 'app-case-details-v1',
  templateUrl: './case-details-v1.component.html',
  styleUrls: ['./case-details-v1.component.scss']
})

export class CaseDetailsV1Component implements OnInit {
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
