export class Message{
    constructor(public messageId : number = 0,
                public agentId : number = 0,
                public message : string = "",
                public isSeen : boolean = false,
                public date : Date = new Date()
    ){}

    setMessage(messageData : any){
        if(messageData != null){
            this.messageId = messageData.messageId;
            this.agentId = messageData.agentId;
            this.message = messageData.message;
            this.isSeen = messageData.isSeen;
            this.date = messageData.date;
        }
    }
}