import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { insightData } from './insight.data';


@Injectable({
  providedIn: 'root'
})
export class InsightService {

  constructor() { }

  getInsightList(){
    return of(insightData);
  }

  getInsightByID(id: any) {
      return insightData.find(x => x.id === id);
  }
}
