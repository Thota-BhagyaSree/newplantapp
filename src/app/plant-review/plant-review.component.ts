import { Component } from '@angular/core';
import { PlantReview } from '../plant-review';
import { PlantReviewService } from '../plant-review.service';

@Component({
  selector: 'app-plant-review',
  templateUrl: './plant-review.component.html',
  styleUrls: ['./plant-review.component.css']
})
export class PlantReviewComponent {
  model: PlantReview = new PlantReview(0,'',0,0,0,'');
  submitted = false;
  success = false;
  error = false;
  numberOfStars = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  constructor(private plantReviewService: PlantReviewService) {}

  onSubmit() {
    this.plantReviewService.submitPlantReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="plant review submitted";

      },
      error=>{
       
      }

    )

    

   
  }
}
