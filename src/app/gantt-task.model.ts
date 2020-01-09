export default class GanttTask {
  id: number;
  parent: number;
  text: string;
  start_date: Date;
  end_date: Date;
  duration: number;
  progress: number;

  constructor(object) {
    const { id, parent, text, start_date, end_date, duration, progress } = object;
    this.id = id;
    this.parent = parent;
    this.text = text;
    this.start_date = start_date;
    this.end_date = end_date;
    this.duration = duration;
    this.progress = progress;
  }

  displayGanttTask(): string {
    return `
      task id = ${this.id}
      task parent = ${this.parent}
      task text = ${this.text}
      task start_date = ${this.start_date}
      task end_date = ${this.end_date}
      task duration = ${this.duration}
      task progress = ${this.progress}
    `;
  }
}
