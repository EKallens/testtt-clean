import {CreateTaskUseCase} from "../application/CreateTaskUseCase";
import {GetTasksUseCase} from "../application/GetTasksUseCase";
import {DeleteTaskUseCase} from "../application/DeleteTaskUseCase";
import {UpdateTaskUseCase} from "../application/UpdateTaskUseCase";
import {GetTaskByIdUseCase} from "../application/GetTaskByIdUseCase";
import {Request, Response} from "express";

export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly getTasksUseCase: GetTasksUseCase,
    private readonly getTaskByIdUseCase: GetTaskByIdUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
  ) {}

  async createTask(req: Request, res: Response) {
    const {title} = req.body;
    const task = await this.createTaskUseCase.execute(title);
    res.status(201).json(task);
  }

  async getTasks(req: Request, res: Response) {
    const tasks = await this.getTasksUseCase.execute();
    res.status(200).json(tasks);
  }

  async getTaskById(req: Request, res: Response) {
    const {id} = req.params;
    const task = await this.getTaskByIdUseCase.execute(id);
    res.status(200).json(task);
  }

  async updateTask(req: Request, res: Response) {
    const {id} = req.params;
    const task = await this.updateTaskUseCase.execute(id);
    res.status(200).json(task);
  }

  async deleteTask(req: Request, res: Response) {
    const {id} = req.params;
    await this.deleteTaskUseCase.execute(id);
    return res.status(204).json();
  }
}