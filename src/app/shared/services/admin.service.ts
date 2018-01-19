import { RequestOptions } from '@angular/http';
import { AgentService } from './agent.service';
import { UrlService } from './url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService{
    constructor(private httpClient : HttpClient,
                private agentService : AgentService,
                private urlService : UrlService){}

    /**
     * $$ ONLY FOR MANAGER USE $$
     * 
     * Add new agent to the system
     * 
     * @param email 
     * @param agentId 
     * @param agentName 
     * @param password 
     * @param callBack 
     * @param errorCallBack 
     */
    addNewAgent(
        email : string , 
        agentId : number , 
        agentName : string , 
        password : string , 
        callBack : (newUserData) => void,
        errorCallBack : (errorCallBack) => void
    ){
        this.addNewUser(email,agentId,agentName,password,false,callBack,errorCallBack);
    }

    /**
     * $$ ONLY FORM MANGER USE $$
     * 
     * Add new manger to the system
     * 
     * @param email 
     * @param agentId 
     * @param agentName 
     * @param password 
     * @param callBack 
     * @param errorCallBack 
     */
    addNewManager(
        email : string , 
        agentId : number , 
        agentName : string , 
        password : string , 
        callBack : (newUserData) => void,
        errorCallBack : (errorCallBack) => void
    ){
        this.addNewUser(email,agentId,agentName,password,true,callBack,errorCallBack);
    }

    /**
     * $$ ONLY MANAGER USE $$
     * 
     * Uploading Excel file of users data to server.
     * 
     * Not tested
     * 
     * @param event 
     */
    uploadUsersExcelFile(event){
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];

            const formData = new FormData();
            formData.append('file', file, file.name);

            const headers = new HttpHeaders();
            // It is very important le leave the Content-Type empty, if you set it to 'multipart/form-data' it will not work !
            // do not set headers.append('Content-Type', 'multipart/form-data');
            headers.append('Authorization', 'Bearer ' + this.agentService.getAgentToken());

            this.httpClient.post('https://api.mysite.com/uploadfile', formData, {
                headers: headers 
            })
            .toPromise()
            .then(data => console.log('success'))
            .catch(error => console.log(error));
        }
    }

    private addNewUser(
        email : string , 
        agentId : number , 
        agentName : string , 
        password : string , 
        isManager : boolean = false,
        callBack : (newUserData) => void,
        errorCallBack : (error) => void
    ){
        let body = {
            email: email,
            agentId: agentId,
            agentName: agentName,
            password: password
        }

        this.httpClient.post(this.urlService.urlApiPath + '/auth/register?Manager=' + isManager , body , {
            headers : this.urlService.getAuthHeader(this.agentService.getAgentToken())
        })
        .toPromise()
        .then(callBack)
        .catch(errorCallBack);
    }
}