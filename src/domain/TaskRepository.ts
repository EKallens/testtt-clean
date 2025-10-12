import { Task } from './Task';

export interface TaskRepository {
  save(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | undefined>;
  update(task: Task): Promise<void>;
}