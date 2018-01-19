import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../../../../shared/services/activity.service';
import { AgentService } from '../../../../../shared/services/agent.service';
import { EnrollActivityAgent } from '../../../../../shared/models/enroll-activity-agent.model';

@Component({
  selector: 'app-champion-of-month-history',
  templateUrl: './champion-of-month-history.component.html',
  styleUrls: ['./champion-of-month-history.component.css',
              '../../../../../../styles/history-collapsible.css']
})
export class ChampionOfMonthHistoryComponent {

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
