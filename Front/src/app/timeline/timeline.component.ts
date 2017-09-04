import { Component, OnInit } from '@angular/core';

import { TimelineService } from './shared/timeline.service';
import { Timeline } from './shared/timeline';

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
    timelineService.get().subscribe((resp: any) => {
      console.log(resp)
      this.timelineEvents = resp.map(t => new Timeline( 
          t.EventType,
          t.EventTitle,
          t.EventDate.substring(0, 10)
      ))
    },
    error => {
        console.log(error.text());
    });
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  getLabelFromType(type: string){
    switch (type) {
      case 'Event':
        return 'One event going to apper in date: '
      case 'Place':
        return 'One place going to recieve a band in date: '
      case 'Band':
        return 'One band going to play in a place in date: '
      default:
        break;
    }
  }
}
