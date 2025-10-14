import {TaskRepository} from "../domain/TaskRepository";
import {Task} from "../domain/Task";

interface ICreateTaskUseCase {
  execute(title: string): Promise<Task>;
}

export class CreateTaskUseCase implements ICreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository){}

  async execute(title: string): Promise<Task> {
    const task = Task.create(title);
    return await this.taskRepository.save(task)
  }
}