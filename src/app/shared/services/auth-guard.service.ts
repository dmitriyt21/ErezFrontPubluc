import { Injectable } from '@angular/core';
import { AgentService } from './agent.service';
import { CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private agentService : AgentService){}

    canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
        return this.agentService.checkIfAgentConnected();
    }
}