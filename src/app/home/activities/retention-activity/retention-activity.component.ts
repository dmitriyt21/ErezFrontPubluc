import { Component, OnInit } from '@angular/core';
import { RetentionActivityAgent } from '../../../shared/models/retention-activity-agent.model';
import { ActivityService } from '../../../shared/services/activity.service';
import { AgentService } from '../../../shared/services/agent.service';

@Component({
  selector: 'app-retention-activity',
  templateUrl: './retention-activity.component.html',
  styleUrls: ['./retention-activity.component.css']
})
export class RetentionActivityComponent implements OnInit {

    retentionActivityAgents : Array<RetentionActivityAgent> = new Array<RetentionActivityAgent>();
    index = 0;
    timeForWaiting = 1000;
    pushAgentInterval;
    isLoading : boolean = true;

    constructor(private activityService : ActivityService,
                private agentService : AgentService) { }

    ngOnInit() {
        this.getRetentionActivities();
    }

    getRetentionActivities(){
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getRetentionActivities(
            (agents) => {
                this.index = agents.length - 1; //setting up interval

                this.pushAgentInterval = setInterval(
                    () => { // strating interval
                        this.isLoading = false;
                        let isConnected =  this.agentService.checkIfAgentConnected();
                        
                        if(this.index >= 0 && isConnected){
                            let tempAgent = new RetentionActivityAgent();
                            tempAgent.setAgent(agents[this.index]);
                            this.retentionActivityAgents.unshift(tempAgent);
                            this.index--;
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
}
