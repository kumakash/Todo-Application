import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required:true}) userID!: string;
  @Input({ required: true }) name!: string;
  addTask? = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    //getUserTask
    return this.taskService.getUserTask(this.userID);
  }
  onStartAddTask() {
    this.addTask = true;
  }

  onCloseAddTask() {
    this.addTask = false;
  }

}
