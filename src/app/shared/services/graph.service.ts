import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GraphService{
    constructor(private httpClient : HttpClient){}
}