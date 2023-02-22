export class PlantReviewDTO {
    id:number;
    customerName:string;
    reviewid : number;
    plantId : number;
    starRating:number;
    msg :string;

    constructor(id:number,customerName:string,reviewid:number, plantId : number, starRating:number, msg :string ){
        this.id=id;
        this.customerName=customerName;
        this.reviewid = reviewid;
        this.plantId = plantId;
        this.starRating= starRating;
        this.msg = msg;

    }
    
}
