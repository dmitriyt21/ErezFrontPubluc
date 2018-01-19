import { ErrorService } from './../../shared/services/error.service';
import {MaterializeAction} from 'angular2-materialize';
import { Router } from '@angular/router';
import { AgentService } from './../../shared/services/agent.service';
import { Component, OnInit, EventEmitter, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    
    toastModule = new EventEmitter<string|MaterializeAction>();
    signinForm : FormGroup;
    isLoading : boolean;
    mes = '';

    constructor(private agentService : AgentService,
                private router : Router,
                private errorService : ErrorService){}

    ngOnInit() {
        if(this.agentService.checkIfAgentConnected()){
            this.router.navigate(["/home"]);
        }

        this.signinForm = new FormGroup({
            'email' : new FormControl(null,Validators.required),
            'password' : new FormControl(null,Validators.required)
        });
    }

    signIn(){
        this.isLoading = true;
        let email = this.signinForm.value.email;
        let password = this.signinForm.value.password;
        
        this.agentService.agentSignIn(email,password,
        (error) => {
            this.mes = this.errorService.getErrorMessage(error.status);
            this.toastMe();
            this.isLoading = false;
        });
    }

    toastMe(){
        this.toastModule.emit('toast');
    }
}
