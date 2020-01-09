import GanttTask from './gantt-task.model';

export const task1 = new GanttTask({
  id: 1,
  parent: null,
  text: 'Project #1',
  start_date: '08-08-2019',
  end_date: '10-08-2019',
  duration: 3,
  progress: 0
});

export const task2 = new GanttTask({
  id: 2,
  parent: null,
  text: 'Project #2',
  start_date: '16-08-2019',
  end_date: '17-08-2019',
  duration: 2,
  progress: 0
});

export const task3 = new GanttTask({
  id: 3,
  parent: null,
  text: 'Task #1',
  start_date: '22-08-2019',
  end_date: '23-08-2019',
  duration: 2,
  progress: 0
});

export const link1 = { id: 1, source: 1, target: 2, type: '0' };
export const link2 = { id: 2, source: 2, target: 3, type: '0' };
