import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UrlService {
    public urlApiPath = 'https://erezapi.azurewebsites.net/api';
    public agentPathLocalStorage = "cad"; //cad - connected Agent data
    
    public getAuthHeader(agentToken : string) : HttpHeaders{
        return new HttpHeaders().set('Authorization', 'Bearer ' + agentToken);
    }
}