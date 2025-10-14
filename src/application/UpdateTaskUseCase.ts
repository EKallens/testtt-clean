import {TaskRepository} from "../domain/TaskRepository";

interface IUpdateTaskUseCase {
  execute(id: string): Promise<void>;
}

export class UpdateTaskUseCase implements IUpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository){}

  async execute(id: string): Promise<void> {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new Error('Task not found');
    }

    const completedTask = task.complete();
    return this.taskRepository.update(completedTask)
  }
}