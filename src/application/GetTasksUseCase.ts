import {Task} from "../domain/Task";
import {TaskRepository} from "../domain/TaskRepository";

interface IGetTasksUseCase {
  execute(): Promise<Task[]>;
}

export class GetTasksUseCase implements IGetTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository){}

  async execute(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }
}