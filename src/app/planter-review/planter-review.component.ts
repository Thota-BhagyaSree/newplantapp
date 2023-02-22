import { Component } from '@angular/core';
import { PlanterReview } from '../planter-review';
import { PlanterReviewService } from '../planter-review.service';
@Component({
  selector: 'app-planter-review',
  templateUrl: './planter-review.component.html',
  styleUrls: ['./planter-review.component.css']
})
export class PlanterReviewComponent {
  model: PlanterReview = new PlanterReview(0,'',0,0,'');
  submitted = false;
  success = false;
  error = false;
  numberOfStars = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  constructor(private planterReviewService: PlanterReviewService) {}

  onSubmit() {
    this.planterReviewService.submitPlanterReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="planter review submitted";

      },
      error=>{
       
      }

    )

    

   
  }
}
