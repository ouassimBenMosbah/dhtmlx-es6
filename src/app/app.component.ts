import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'dhtmlx-gantt';
import GanttTask from './gantt-task.model';
import { link2, link1, task1, task2, task3 } from './data';
// import { gantt } from "dhtmlx-gantt";  // TODO: not working

@Component({
  selector: 'app-root',
  template: `
    <div #gantt_here class="gantt-chart"></div>
  `,
  styles: [
    `
      .gantt-chart {
        width: 100%;
        height: 500px;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('gantt_here', { static: true }) ganttContainer: ElementRef;

  ngOnInit() {
    gantt.init(this.ganttContainer.nativeElement);
    gantt.parse({
      data: [task1, task2, task3],
      links: [link1, link2]
    });
    setTimeout(() => {
      const task: GanttTask = gantt.getTaskByIndex(0);
      console.log(task instanceof GanttTask);
      console.log(task.displayGanttTask());
    }, 1000);
  }
}
