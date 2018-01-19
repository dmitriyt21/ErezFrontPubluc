export class EnrollActivityAgent{
    constructor(public agentId : number = 0,
                public agentName : string = "",
                public agentPlace : number = 0,
                public activityDate : Date = new Date(),
                public enrollActionId : number = 0,
                public percOfTarget : number = 0,
                public points : number = 0,
                public sumOfSales : number = 0,
                public target : number = 0,
                public agentHistory : Array<EnrollActivityAgent> = new Array<EnrollActivityAgent>()){}

    setAgent(agentData : any){
        if(agentData != null){
            this.agentId = agentData.agentId;
            this.agentName = agentData.agentName;
            this.agentPlace = agentData.agentPlace;
            this.activityDate = new Date(agentData.date);
            this.enrollActionId = agentData.enrollActionId;
            this.percOfTarget = agentData.percOfTarget;
            this.points = agentData.points;
            this.sumOfSales = agentData.sumOfSales;
            this.target = agentData.target;
        }
    }
}