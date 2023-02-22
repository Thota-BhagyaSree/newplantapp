import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlanterReview } from './planter-review';
@Injectable({
  providedIn: 'root'
})
export class PlanterReviewService {


  baseURL:string = 'http://localhost:6001';
  submitReviewEndPoint:string=this.baseURL+'/nurseryreview/add';
  // ReviewByPlanterIdEndPoint:string=this.baseURL+'/nurseryreview/review/planterId';
   getByReviewEndPoint: string=this.baseURL+ '/nurseryreview/listOfReviews';
 
  
 
  constructor(private http:HttpClient) {
    

   }

  //  getReviewByPlanterId(PlanterId:number):Observable<PlanterReviewDTO[]>{
  //   console.log("inside method 1" +this.ReviewByPlanterIdEndPoint);
  //   this.ReviewByPlanterIdEndPoint= this.ReviewByPlanterIdEndPoint+'/'+PlanterId;
  //   console.log("after getting review 2"+ this.ReviewByPlanterIdEndPoint);

  //   return this.http.get<PlanterReviewDTO[]>(`${this.ReviewByPlanterIdEndPoint}`);
  //  }


   getRatingsByPlanterId(filterReviewbyrating:number):PlanterReview[]
   {
    return[];
   }
   submitPlanterReview(PlanterReview: PlanterReview):Observable<PlanterReview[]> {

    console.log("inside method 1 : Review added" +PlanterReview);
    
    return this.http.post<PlanterReview[]>(`${this.submitReviewEndPoint}`,PlanterReview);
    
  }
  getByPlanterReview(PlanterReview: PlanterReview):Observable<PlanterReview[]> {

    console.log("inside method 1 : Review added" +PlanterReview);
    
    return this.http.post<PlanterReview[]>(`${this.getByReviewEndPoint}`,PlanterReview);
    
  }
  
}
