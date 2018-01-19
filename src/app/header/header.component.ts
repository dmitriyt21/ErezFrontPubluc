import { AgentService } from './../shared/services/agent.service';
import { Component, OnInit , OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { Event } from '@angular/router';
import { Agent } from '../shared/models/agent.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    constructor(private router : Router,
                private agentService : AgentService) { }

    isHeaderTransparent : boolean;
    isSignInPage : boolean = true;

    ngOnInit() {   
        this.router.events.subscribe(
            (events:any) => {
                if(events.url != undefined && (events.url == "/sign-in" || events.url == "/")){
                    this.isHeaderTransparent = false;
                    this.isSignInPage = true;
                }
                else{
                    this.isHeaderTransparent = true;
                    this.isSignInPage = false;
                }
            }
        );
    }

    checkIfAgentConnected() : boolean{
        let isConnected :boolean = this.agentService.checkIfAgentConnected();
        if(!this.isSignInPage && !isConnected){
            window.location.reload();
        }
        return isConnected;
    }

    signOut(){
        this.agentService.agentSignOut();
    }
}
