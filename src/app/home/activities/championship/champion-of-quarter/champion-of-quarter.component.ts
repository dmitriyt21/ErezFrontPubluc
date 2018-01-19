import { Component, OnInit } from '@angular/core';
import { EnrollActivityAgent } from '../../../../shared/models/enroll-activity-agent.model';
import { ActivityService } from '../../../../shared/services/activity.service';
import { AgentService } from '../../../../shared/services/agent.service';

@Component({
  selector: 'app-champion-of-quarter',
  templateUrl: './champion-of-quarter.component.html',
  styleUrls: ['./champion-of-quarter.component.css' ,
              '../../activities.component.css',
              '../../../../../styles/collapsible.css']
})
export class ChampionOfQuarterComponent implements OnInit {

   
    enrollActivityAgents : Array<EnrollActivityAgent> = new Array<EnrollActivityAgent>();
    index = 0;
    timeForWaiting = 2000;
    pushAgentInterval;
    isLoading : boolean = true;

    constructor(private activityService : ActivityService,
                private agentService : AgentService) { }

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
}

