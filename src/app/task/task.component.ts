import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from './user-task/user-task.model';
import { TaskService } from './task.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [UserTaskComponent, AddTaskComponent]
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
