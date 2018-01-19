import { Component, OnInit, Input } from '@angular/core';
import { EnrollActivityAgent } from '../../../../shared/models/enroll-activity-agent.model';
import { ActivityService } from '../../../../shared/services/activity.service';
import { AgentService } from '../../../../shared/services/agent.service';

@Component({
  selector: 'app-enroll-agent-history',
  templateUrl: './enroll-agent-history.component.html',
  styleUrls: ['./enroll-agent-history.component.css']
})
export class EnrollAgentHistoryComponent{

    @Input() agent : EnrollActivityAgent;
    isLoading : boolean = true;
    isLoaded : boolean;

    constructor(private activityService : ActivityService,
                private agentService : AgentService) { }

    loadHistory(){
        if(!this.isLoaded){
          this.isLoaded = true;
          this.getAgentActivityHistoy(this.agent.agentId);
        }
    }
    private getAgentActivityHistoy(agentId : number){
        this.isLoading = true;

        this.activityService.getAgentEnrollActivitiesHistory(agentId , 
        (agentHistoryData) => {
            if(this.agent.agentHistory.length != 0)
                this.agent.agentHistory = new Array<EnrollActivityAgent>();

            for(let agentData of agentHistoryData){
                if(this.agentService.checkIfAgentConnected()){
                    let tempAgent = new EnrollActivityAgent();
                    tempAgent.setAgent(agentData);
                    this.agent.agentHistory.push(tempAgent);
                }
                else{
                    window.location.reload();
                }
            }

            //after loading 
            this.isLoading = false;
        },
        (error) => {
            let status : string = error.statusText;
            let authorized = "ok";
            let unauthorized = "unauthorized";
            if(status.toLocaleLowerCase().indexOf(unauthorized) > -1){
                alert("עלייך להתחבר מחדש.");
                this.agentService.agentSignOut();
            }
        });
    }
}
