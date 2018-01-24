export class Graph{
    
    constructor(public salesDate : Date = new Date(),
                public place : number = 0,
                public points : number = -1,
                public pointsDiff: number = 0,
                ){
                    this.salesDate = salesDate;
                    this.place = place;
                    this.points=points;
                    this.pointsDiff=pointsDiff;
                }
        
    }