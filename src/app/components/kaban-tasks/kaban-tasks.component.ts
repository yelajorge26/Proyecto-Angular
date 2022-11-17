import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {

  todoTasks: ITask[] = [
    {
      title: "Animaciones",
      completed: false,
      description: "Aprender animaciones en angular",
      level: LEVELS.INFO
    },{
      title: "Angular CLI",
      description: "Aprender comandos y configuraciones de Angular CLI",
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: "Deploy",
      description: "Aprender bundles en Firebase",
      completed: false,
      level: LEVELS.BLOCKING
    }
  ];

  doneTasks: ITask[] = [
    {
      title: "Configuración IDE",
      completed: true,
      description: "Configurar e instalar plugins en VS Code",
      level: LEVELS.URGENT
    },{
      title: "Instalar Angular CLI",
      description: "Instalar con npm Angular CLI de forma global",
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: "Hola Mundo",
      description: "Crear con Angular CLI un proyecto inicial",
      completed: true,
      level: LEVELS.URGENT
    }
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed;
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
