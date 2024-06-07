import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../user-task/user-task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({ required: true }) userID!: string;
  @Output() closeAddTaskBox = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskService = inject(TaskService);

  onCancelAddTask() {
    this.closeAddTaskBox.emit();
  }

  onSubmitAddTask() {
    this.taskService.addTask({ title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDueDate }, this.userID);
    this.closeAddTaskBox.emit();
  }

}
