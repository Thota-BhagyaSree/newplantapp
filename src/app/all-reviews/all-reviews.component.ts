import { Component } from '@angular/core';
import { PlantReview } from '../plant-review';
import { PlantReviewDTO } from '../plant-review-dto';
import { PlantReviewService } from '../plant-review.service';
@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent {
  allReviews:PlantReviewDTO [] = [];
  allPlant : Array<PlantReview> = [];

 
  constructor(private reviewService:PlantReviewService)
  {
    
    reviewService.getAllreviewsFromSpring().subscribe(
      data=>{
          this.allReviews = data;
      },
      error=>{
      
        
      }
    );
  }
 
}
