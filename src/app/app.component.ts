import { ScreenSettingsService } from './shared/services/screen-settings.service';
import { Router } from '@angular/router';
import { AgentService } from './shared/services/agent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    constructor(private agentService : AgentService,
                private screenSettingsService :ScreenSettingsService,
                private router : Router){}
    
    stayConnected : boolean = true;

    ngOnInit(){
        
        if(!this.agentService.checkIfAgentConnected()){
            this.router.navigate(['/sign-in']);
        }
        else{
            this.checkIfTokenIsValid();
        }
        this.screenSettingsService.resizeScreen();
    }

    checkIfTokenIsValid(){
        this.agentService.checkIfTokenIsValid(this.agentService.getAgentToken(),
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

    onResize(){
        this.screenSettingsService.resizeScreen();
    }
}
