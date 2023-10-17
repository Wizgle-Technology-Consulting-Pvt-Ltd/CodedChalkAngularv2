import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsightService } from '../insight.service';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {
  insight: any;
  
    constructor(private insightService: InsightService,
        private router: Router
      ) {}
  
    ngOnInit() {
      this.insightService.getInsightList().subscribe(
        (result: any) => {
            this.insight = result;
        }
     );
    }
  
    goToDetails(id: any){
      this.router.navigate(['/insight-detail/' +id])
      }
  }
