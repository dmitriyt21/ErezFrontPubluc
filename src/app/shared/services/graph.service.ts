import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { AgentService } from './agent.service';
import { Injectable, EventEmitter} from '@angular/core';
import { Agent } from '../../shared/models/agent.model';

@Injectable()
export class GraphService{
    AgentIdUpdated : EventEmitter<number> = new EventEmitter();
    currentAgentId:number = 0;
    constructor(private httpClient : HttpClient,
        private agentService : AgentService,
        private urlService : UrlService){}

    passAgent4Graph (agentId: number) {
        this.currentAgentId=agentId;
        this.AgentIdUpdated.emit(this.currentAgentId);
    }

        //enroll activities//
    /**
     * Gets enroll graph agents data from server
     * @param agentId agent ID
     * @param callBack getEnrollmentGraphData
     */
    getEnrollmentGraphData(callBack : (agent) => void , errorCallBack : (error) => void){
        if(this.agentService.checkIfAgentConnected()){
            this.httpClient.get(this.urlService.urlApiPath + '/EnrollmentGraph/' + this.currentAgentId , {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
              }
            )
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
        }
    }
}


