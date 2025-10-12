import {TaskRepository} from "../domain/TaskRepository";
import {Task} from "../domain/Task";

export class InMemoryRepository implements TaskRepository {
  public tasks: Task[] = [];

  async save(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findById(id: string): Promise<Task | undefined> {
    return this.tasks.find(t => t.id === id);
  }

  async update(task: Task): Promise<void> {
    const taskIndex = this.tasks.findIndex((_task)=> _task.id === task.id);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    this.tasks[taskIndex] = task;
  }
}