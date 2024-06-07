import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './user-task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
    selector: 'app-user-task',
    standalone: true,
    templateUrl: './user-task.component.html',
    styleUrl: './user-task.component.css',
    imports: [CardComponent, DatePipe]
})
export class UserTaskComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) task!: Task;
  private taskService = inject(TaskService);
  
  taskComplete() {
    this.taskService.removeTasks(this.task.id);
  }
}
