import { AgentService } from './../../../shared/services/agent.service';
import { Component, OnInit } from '@angular/core';
import { OverallActivityAgent } from '../../../shared/models/overall-activity-agent.model';
import { ActivityService } from '../../../shared/services/activity.service';

@Component({
  selector: 'app-overall-activities',
  templateUrl: './overall-activities.component.html',
  styleUrls: ['./overall-activities.component.css']
})
export class OverallActivitiesComponent implements OnInit {

    overallActivityAgents : Array<OverallActivityAgent> = new Array<OverallActivityAgent>();
    index = 0;
    timeForWaiting = 1000;
    pushAgentInterval;
    isLoading : boolean = true;

    constructor(private activityService : ActivityService,
                private agentService : AgentService) { }

    ngOnInit() {
        this.getOverallActivities();
    }

    getOverallActivities(){
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getOverallActivities(
            (agents) => {

                this.index = agents.length - 1; //setting up interval

                this.pushAgentInterval = setInterval(
                    () => { // strating interval
                        this.isLoading = false;
                        let isConnected =  this.agentService.checkIfAgentConnected();

                        if(this.index >= 0 && isConnected){
                            let tempAgent = new OverallActivityAgent();
                            tempAgent.setAgent(agents[this.index]);
                            this.overallActivityAgents.unshift(tempAgent);
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
            });
    }

    stopInterval(){
        if(this.index < 0){
            clearInterval(this.pushAgentInterval);
        }
    }
}
