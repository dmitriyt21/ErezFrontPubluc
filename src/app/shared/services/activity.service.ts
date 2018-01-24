import { UrlService } from './url.service';
import { AgentService } from './agent.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class ActivityService{
    constructor(private httpClient : HttpClient,
                private agentService : AgentService,
                private urlService : UrlService){}        
        
    //enroll activities//
    /**
     * Gets enroll activity agents data from server
     * @param callBack EnrollActivityAgents
     */
    getEnrollActivities(callBack : (EnrollActivitiesAgents) => void , errorCallBack : (error) => void){
        if(this.agentService.checkIfAgentConnected()){
            this.httpClient.get(this.urlService.urlApiPath + '/enrollmentActivity' , {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
              }
            )
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
        }
    }

    //retention activities//
    /**
     * Gets retention activity agents data from server
     * @param callBack RetentionActivitiesAgents
     */
    getRetentionActivities(callBack : (RetentionActivitiesAgents) => void  , errorCallBack : (error) => void){
        if(this.agentService.checkIfAgentConnected()){
            this.httpClient.get(this.urlService.urlApiPath + '/RetentionActivities' , {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
                }
            )
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
        }
    }

    //overall activities//
    /**
     * Gets overall activities agents data from server
     * @param callBack OverallActivitiesAgents
     */
    getOverallActivities(callBack : (OverallActivitiesAgents) => void , errorCallBack : (error) => void){
        if(this.agentService.checkIfAgentConnected()){
            this.httpClient.get(this.urlService.urlApiPath + '/OverallActivities' , {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
                }
            )
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
        }
    }

    /**
     * Gets an array of all enroll activity data for one agent
     * @param AgentId 
     * @param callBack 
     */
    getAllAgentEnrollActivities(AgentId : number , callBack : (agentsDataList) => void , errorCallBack : (error) => void){
        if(this.agentService.checkIfAgentConnected()){
            this.httpClient.get(this.urlService.urlApiPath + '/enrollmentActivity' +  "/" + AgentId, {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
              }
            )
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
        }
    }

    /**
     * Gets the latest enroll activity for one agent
     * @param agentId 
     * @param callBack 
     */
    getAgentEnrollActivity(agentId : number , callBack : (agentData) => void , errorCallBack : (error) => void){
        this.agentEnrollActivityData(agentId , false , callBack , errorCallBack);
    }

    /**
     * Gets an array of agent enroll activities history
     * @param agentId 
     * @param callBack 
     */
    getAgentEnrollActivitiesHistory(agentId : number , callBack : (agentHistory) => void , errorCallBack : (error) => void){
        this.agentEnrollActivityData(agentId , true , callBack , errorCallBack);
    }

    private agentEnrollActivityData(agentId : number , isHistory : boolean , callBack : (agentData) => void , errorCallBack : (error) => void){
        if(this.agentService.checkIfAgentConnected()){
            let getHistoryPath = "?hist=" +  isHistory;
            this.httpClient.get(this.urlService.urlApiPath + '/enrollmentActivity' +  "/" + agentId + getHistoryPath, {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
              }
            )
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
        }
        else{
            this.agentService.agentSignOut();
        }
    }


}