import { Agent } from './../../shared/models/agent.model';
import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../shared/services/agent.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent {

    constructor(private agentService : AgentService) { }

    getAgentData() : Agent{
        return this.agentService.getAgentData();
    }

    checkIfAgentConnected() : boolean{
        return this.agentService.checkIfAgentConnected();
    }

    signOut(){
        this.agentService.agentSignOut();
    }
}
