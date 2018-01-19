import { GraphService } from './../shared/services/graph.service';
import { Component, OnInit, Input } from '@angular/core';
import { Graph } from '../shared/models/graph.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

    @Input () graphData : Graph;

    constructor(private graphService : GraphService) { }

    ngOnInit() {
    }
    //just for
}
