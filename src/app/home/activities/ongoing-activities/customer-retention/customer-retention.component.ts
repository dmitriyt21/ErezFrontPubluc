import { Component, OnInit } from '@angular/core';
import { EnrollActivityAgent } from '../../../../shared/models/enroll-activity-agent.model';
import { ActivityService } from '../../../../shared/services/activity.service';
import { AgentService } from '../../../../shared/services/agent.service';
import { GraphService } from '../../../../shared/services/graph.service';

@Component({
  selector: 'app-customer-retention',
  templateUrl: './customer-retention.component.html',
  styleUrls: ['./customer-retention.component.css',
              '../../activities.component.css',
              '../../../../../styles/collapsible.css']
})
export class CustomerRetentionComponent implements OnInit {

    enrollActivityAgents : Array<EnrollActivityAgent> = new Array<EnrollActivityAgent>();
    index = 0;
    timeForWaiting = 200;
    pushAgentInterval;
    isLoading : boolean = true;

    constructor(private activityService : ActivityService,
                private agentService : AgentService,
                private graphService: GraphService) { }

    ngOnInit() {
        this.getEnrollActivities();
    }

    getEnrollActivities(){
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(
            (agents) => {

                this.index = agents.length - 1; //setting up interval

                this.pushAgentInterval = setInterval(
                    () => { // strating interval
                        this.isLoading = false;
                        let isConnected =  this.agentService.checkIfAgentConnected();

                        if(this.index >= 0 && isConnected){
                            let tempAgent = new EnrollActivityAgent();
                            tempAgent.setAgent(agents[this.index]);
                            this.enrollActivityAgents.unshift(tempAgent);
                            this.index--;
                        }
                        else if(!isConnected){
                            this.stopInterval();
                            window.location.reload();
                        }
                        else{
                            this.stopInterval();
                        }
                    }
                ,this.timeForWaiting); // step length    
            },
            (error) => {
                let status : string = error.statusText;
                let authorized = "ok";
                let unauthorized = "unauthorized";
                if(status.toLocaleLowerCase().indexOf(unauthorized) > -1){
                    alert("עלייך להתחבר מחדש.");
                    this.agentService.agentSignOut();
                }
            }
        );
    }

    stopInterval(){
        if(this.index < 0){
            clearInterval(this.pushAgentInterval);
        }
    }

    passAgent4Graph(agentId: number){
        console.log(agentId);
        this.graphService.passAgent4Graph(agentId);
    }
}
