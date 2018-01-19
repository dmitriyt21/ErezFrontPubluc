import { UrlService } from './url.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agent } from '../models/agent.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AgentService {

    constructor(private httpClient : HttpClient,
                private router : Router,
                private urlService : UrlService){}

    /**
     * Agent sign in
     * @param email 
     * @param password 
     * @param errorCallBack 
     */
    agentSignIn(email : string , password : string , errorCallBack : (error) => void){
        let body = {
            "email": email,
            "password": password
        }

        this.httpClient.post(this.urlService.urlApiPath + '/auth/token',body)
        .toPromise()
        .then(
            agentData => {
                let agent = new Agent();
                agent.setAgent(agentData,email);
                this.setAgentDataOnLocalStorage(JSON.stringify(agent));
                this.router.navigate(["/home"]);
            })
        .catch(errorCallBack);
    }

    /**
     * Sign out from site
     */
    agentSignOut(){
        this.removeAgentDataOnLocalStorage();
        window.location.reload();
    }

    /**
     * Returns agent token
     */
    getAgentToken() : string{
        return this.getAgentData().agentToken;
    }

    /**
     * Returns an Agent object with agent data
     */
    getAgentData() : Agent{
        return JSON.parse(this.getAgentDataOnLocalStorage());
    }

    /**
     * Return true if agent connected to the site
     */
    checkIfAgentConnected() : boolean{
        return this.getAgentData() != null && this.getAgentData().agentToken ? true : false;
    }

    /**
     * Checking if token is valid.
     * 
     * @param token 
     * @param callBack 
     */
    checkIfTokenIsValid(token : string , callBack : (response) => void){
        this.httpClient.get(this.urlService.urlApiPath + '/auth/checkToken' , {
                headers : this.urlService.getAuthHeader(this.getAgentToken())
            }
        )
        .toPromise()
        .catch(callBack);
    }

    private setAgentDataOnLocalStorage(AgentData : string){
        localStorage.setItem(this.urlService.agentPathLocalStorage, AgentData);
    }

    private getAgentDataOnLocalStorage() : string{
        let agentData = localStorage.getItem(this.urlService.agentPathLocalStorage);
        return agentData;
    }

    private removeAgentDataOnLocalStorage(){
        localStorage.removeItem(this.urlService.agentPathLocalStorage);
    }
}

