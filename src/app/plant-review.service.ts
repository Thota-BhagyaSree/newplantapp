import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantReviewDTO } from './plant-review-dto';
import { PlantReview } from './plant-review';
@Injectable({
  providedIn: 'root'
})
export class PlantReviewService {
 
  plantArr:PlantReview[] = [];
  
  baseURL:string = 'http://localhost:6001';
  submitReviewEndPoint:string=this.baseURL+'/nurseryreview/add';
  // ReviewByPlantIdEndPoint:string=this.baseURL+'/nurseryreview/review/plantId';
   allReviewEndPoint: string=this.baseURL+ '/nurseryreview/listOfReviews';
 
  
 
  constructor(private http:HttpClient) {
    

   }

  //  getReviewByPlantId(PlantId:number):Observable<PlantReviewDTO[]>{
  //   console.log("inside method 1" +this.ReviewByPlantIdEndPoint);
  //   this.ReviewByPlantIdEndPoint= this.ReviewByPlantIdEndPoint+'/'+PlantId;
  //   console.log("after getting review 2"+ this.ReviewByPlantIdEndPoint);

  //   return this.http.get<PlantReviewDTO[]>(`${this.ReviewByPlantIdEndPoint}`);
  //  }


   getRatingsByPlantId(filterReviewbyrating:number):PlantReview[]
   {
    return[];
   }
   submitPlantReview(PlantReview: PlantReview):Observable<PlantReview[]> {

    console.log("inside method 1 : Review added" +PlantReview);
    
    return this.http.post<PlantReview[]>(`${this.submitReviewEndPoint}`,PlantReview);
    
  }
  getByPlantReview(PlantReview: PlantReview):Observable<PlantReview[]> {

    console.log("inside method 1 : Review added" +PlantReview);
    
    return this.http.post<PlantReview[]>(`${this.allReviewEndPoint}`,PlantReview);
    
  }
  getAllreviewsFromSpring():Observable<PlantReviewDTO[]> {
    console.log("inside service : "+this.allReviewEndPoint);
      return this.http.get<PlantReviewDTO[]>(`${this.allReviewEndPoint}`);
  }


  
  // getPlantersByStarRating(filterStarRating:number):PlantReview[]
  // {
  //   // localhost:8080/api/planter/{rating}
  //  let outputArr:PlantReview[] = [];

  //   this.plantArr.forEach(p=>{
  //     if(p.starRating == filterStarRating)
  //     {
  //       outputArr.push(p);
  //     }
  //   });

  //   return outputArr;
  // }
  // getPlantersByplantId(filterplantId:number):PlantReview[]
  // {
  //   console.log("plantId inside service "+ filterplantId);
  //   // localhost:8080/api/planter/{bloom}
  //  let outputArr:PlantReview[] = [];

  //   this.plantArr.forEach(p=>{
  //     if(p.plantId == filterplantId)
  //     {
  //       outputArr.push(p);
  //     }
  //   });

  //   return outputArr;
  // }
  
}
