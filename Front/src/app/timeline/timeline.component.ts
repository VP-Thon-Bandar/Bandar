import { Component, OnInit } from '@angular/core';

import { TimelineService } from "./shared/timeline.service";
import { Timeline } from "./shared/timeline";

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timelineEvents: Timeline[];

  timelineService: TimelineService;

  constructor(timelineService: TimelineService) {
    console.log('pase por aca 222');



    timelineService.get().subscribe((resp: any) => {
      console.log(resp)
      this.timelineEvents = resp.map(t => new Timeline( 
          t.EventType,
          t.EventTitle,
          t.EventDate
      ))
    },
    error => {
        console.log(error.text());
    });
  }

  ngOnInit() {
  }
}
