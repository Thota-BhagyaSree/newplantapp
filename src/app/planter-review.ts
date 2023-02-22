export class PlanterReview {
  
        id:number;
        customerName:string;
       
        planterId : number;
        starRating:number;
        msg :string;
    
        constructor(id:number,customerName:string, planterId : number, starRating:number, msg :string ){
            this.id=id;
            this.customerName=customerName;
          
            this.planterId = planterId;
            this.starRating= starRating;
            this.msg = msg;
    
        }
    }
    

