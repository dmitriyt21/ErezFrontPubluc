export class RetentionActivityAgent{
    constructor(public agentId : number = 0,
                public agentName : string = "",
                public agentPlace : number = 0,
                public numOfExistCust : number = 0,
                public numOfNewCust : number = 0,
                public activityDate : Date = new Date(),
                public retentionActionId : number = 0,
                public percOfTarget : number = 0,
                public points : number = 0,
                public target : number = 0){}

    setAgent(agentData : any){
        if(agentData != null){
            this.agentId = agentData.agentId;
            this.agentName = agentData.agentName;
            this.agentPlace = agentData.agentPlace;
            this.numOfExistCust = agentData.numOfExistCust;
            this.numOfNewCust = agentData.numOfNewCust;
            this.activityDate = new Date(agentData.date);
            this.retentionActionId = agentData.retentionActionId;
            this.percOfTarget = agentData.percOfTarget;
            this.points = agentData.points;
            this.target = agentData.target;
        }
    }
}