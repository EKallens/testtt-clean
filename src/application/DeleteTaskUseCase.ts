import {TaskRepository} from "../domain/TaskRepository";

interface IDeleteTaskUseCase {
  execute(id: string): Promise<void>;
}

export class DeleteTaskUseCase implements IDeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository){}

  async execute(id: string): Promise<void> {
    return await this.taskRepository.delete(id);
  }
}