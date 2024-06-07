import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { UserTaskComponent } from "./user-task/user-task.component";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [TaskComponent, AddTaskComponent, UserTaskComponent],
    exports: [TaskComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})

export class TaskModule{

}