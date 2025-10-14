import {Task} from "../domain/Task";
import {TaskRepository} from "../domain/TaskRepository";

interface IGetTaskByIdUseCase {
  execute(id: string): Promise<Task | undefined>;
}

export class GetTaskByIdUseCase implements IGetTaskByIdUseCase {
  constructor(private readonly taskRepository: TaskRepository){}

  async execute(id: string): Promise<Task | undefined> {
    return await this.taskRepository.findById(id);
  }
}