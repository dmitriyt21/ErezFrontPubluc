export class OverallActivityAgent{
    constructor(public agentId : number = 0,
                public agentName : string = "",
                public agentPlace : number = 0,
                public activityDate : Date = new Date(),
                public enrollActionId : number = 0,
                public enrollPoints : number = 0,
                public retentionPoints : number = 0,
                public overallPoints : number = 0){}

    setAgent(agentData : any){
        if(agentData != null){
            this.agentId = agentData.agentId;
            this.agentName = agentData.agentName;
            this.agentPlace = agentData.agentPlace;
            this.activityDate = new Date(agentData.date);
            this.enrollActionId = agentData.enrollActionId;
            this.enrollPoints = agentData.enrollPoints;
            this.retentionPoints = agentData.retentionPoints;
            this.overallPoints = agentData.overallPoints;
        }
    }
}