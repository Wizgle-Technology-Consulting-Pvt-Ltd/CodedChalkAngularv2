import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InsightService } from "../insight.service";

@Component({
  selector: 'app-insight-detail',
  templateUrl: './insight-detail.component.html',
  styleUrls: ['./insight-detail.component.scss']
})
export class InsightDetailComponent implements OnInit {
  id: any;
  insightDetails: any;

    constructor(private insightService: InsightService,  // Corrected service name
      private activeRoute: ActivatedRoute,
      ) {}

    ngOnInit() {
        this.id = this.activeRoute.snapshot.paramMap.get("id");
        this.insightDetails = this.insightService.getInsightByID(this.id);
    }
}
