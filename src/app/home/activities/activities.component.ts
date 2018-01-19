import { AgentService } from './../../shared/services/agent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
 
    agent = this.agentService.getAgentData();

    constructor(private agentService : AgentService) { 
    }

    ngOnInit() {
    }
}
