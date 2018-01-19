import { AgentService } from './agent.service';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';

@Injectable()
export class MessagesService {

    constructor(private httpClient : HttpClient,
                private agentService : AgentService,
                private urlService : UrlService){}

    /**
     * Gets the last message that the aget received
     * 
     * @param callBack
     * @param errorCallBack 
     */
    getLastReceivedMessage(callBack : (message : Message) => void , errorCallBack : (error) => void){
        let agent = this.agentService.getAgentData();
        let agentId = agent.agentId;
        let agentToken = agent.agentToken;

        this.httpClient
        .get(this.urlService.urlApiPath + '/privateMessages/' + agentId + '?last=true' , {
            headers : this.urlService.getAuthHeader(agentToken)
        })
        .toPromise()
        .then(callBack)
        .catch(errorCallBack);
    }

    /**
     * Gets all the messages that the agent received in the last 7 days
     * 
     * NOT READY FOR USE!!
     * 
     * @param agentId 
     * @param callBack 
     * @param errorCallBack 
     */
    getAllAgentMessages(agentId : number , callBack : (messagesArray : Array<Message>) => void , errorCallBack : (error) => void){
        // this.httpClient
        // .get(this.urlService.urlApiPath + 'privateMessages' + agentId + '?last=false'  , {
        //     headers : this.urlService.getAuthHeader(this.agentService.getAgentToken())
        // })
        // .toPromise()
        // .then(callBack)
        // .catch(errorCallBack);
    }

    /**
     * $$ ONLY FOR MANAGER USE $$
     * 
     * Gets an array of all messages
     * 
     * @param callBack
     * @param errorCallBack 
     */
    getAllSentMessages(callBack : (messagesArray : Array<Message>) => void , errorCallBack : (error) => void){
        this.httpClient
        .get(this.urlService.urlApiPath + 'privateMessages' , {
            headers : this.urlService.getAuthHeader(this.agentService.getAgentToken())
        })
        .toPromise()
        .then(callBack)
        .catch(errorCallBack);
    }

    /**
     * $$ ONLY FOR MANAGER USE$$
     * 
     * sending message to agent.
     * 
     * @param agentId 
     * @param message 
     * @param date 
     * @param callBack 
     * @param errorCallBack 
     */
    sendMessage(
        agentId : string , 
        message : string , 
        date : Date = new Date(),
        callBack : (messagesArray) => void , 
        errorCallBack : (error) => void)
        {
        let body = {
            agentId: agentId,
            message: message,
            date: date
        }

        this.httpClient.post(this.urlService.urlApiPath + '/privateMessages' , body , {
            headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
        })
        .toPromise()
        .then()
        .catch();
    }


    // not in use right now

    private updateMessage(){

    }

    private deleteMessage(){

    }
}