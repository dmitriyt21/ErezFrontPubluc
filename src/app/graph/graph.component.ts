import { GraphService } from './../shared/services/graph.service';
import { ActivityService } from './../shared/services/activity.service';
import { AgentService } from './../shared/services/agent.service';

import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Graph } from '../shared/models/graph.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit { 

    graphDataPoints : Array<number> = new Array<number>();
    graphDataPlaces : Array<number> = new Array<number>();
    graphDataPointsDiff : Array<number> = new Array<number>();

    graphDataDates : Array<string> = new Array<string>();

    isLoading : boolean = true;
    isLoaded : boolean;

    constructor(private activityService : ActivityService,
                private agentService : AgentService,
                private graphService:GraphService) { }

    ngOnInit() {
        console.log(this.graphService.currentAgentId);
        this.graphService.AgentIdUpdated.subscribe (
            (agentId) => {
                this.graphService.getEnrollmentGraphData(
                    (agentGraphData : Array<Graph>) => {
                         this.graphDataPoints= new Array<number>();
                         this.graphDataPlaces= new Array<number>();
                         this.graphDataPointsDiff = new Array<number>();
                         this.graphDataDates =new Array<string>();
                        console.log(agentGraphData);
                        for(let agentData of agentGraphData){
                            if(this.agentService.checkIfAgentConnected()){
                                let tempAgent = new Graph(agentData.salesDate,agentData.place,agentData.points,agentData.pointsDiff);
                                //tempAgent.setAgent(agentData);
                                //console.log(tempAgent.salesDate.getDay().toString());
                                this.graphDataPoints.push(tempAgent.points);
                                this.graphDataPlaces.push(tempAgent.place);
                                this.graphDataPointsDiff.push(tempAgent.pointsDiff);
                                this.graphDataDates.push(tempAgent.salesDate.toString().substr(0,10));
                                console.log(tempAgent.salesDate.toString())
                                console.log(this.graphDataPoints);
                                console.log(this.graphDataPlaces);
                                console.log(this.graphDataPointsDiff);
                                console.log(this.graphDataDates);
                            }
                            else{
                                window.location.reload();
                            }
                        }
                        this.chartDatasets = [
                            {data: this.graphDataPointsDiff, label: 'שינוי בניקוד מיום קודם'},
                            {data: this.graphDataPlaces, label: 'מקום'},
                            {data: this.graphDataPoints, label: 'ניקוד'}
                        ];
                        this.chartLabels = this.graphDataDates;
                        //this.chartLabels.forEach((cl:Date) => {console.log(cl.getDay())})
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
                    }
                );
                    
                //this.getEnrollmentGraphData();
            }
        );

        //if (!(this.graphService.currentAgentId==null)) {
        //this.loadHistory();
        }
    
    public chartType:string = 'line';
        
    public chartDatasets:Array<any> = [
        {data: this.graphDataPointsDiff, label: 'שינוי בניקוד מיום קודם'},
        {data: this.graphDataPlaces, label: 'מקום'},
        {data: this.graphDataPoints, label: 'ניקוד'}
    ];

    public chartLabels:Array<any> = this.graphDataDates;

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions:any = { 
        responsive: true
    };

    public chartClicked(e: any): void { 
         
    } 
    
    public chartHovered(e: any): void { 
         
    }
}
