export class Agent{
    constructor(public agentId : number = 0,
                public agentName : string = "",
                public agentEmail : string = "",
                public agentToken : string = "",
                public isAdmin : boolean = false,
                public tokenExpiration : Date = new Date()){}

    setAgent(agentData : any , agentEmail ?: string){
        this.agentId = agentData.agentId;
        this.agentName = agentData.agentName;
        this.agentEmail = agentEmail ? agentEmail : '';
        this.isAdmin = this.agentId == 200? true: false;
        this.agentToken = agentData.token;
        this.tokenExpiration = new Date(agentData.expiration);
    }
}