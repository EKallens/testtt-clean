import express from 'express';
import {TaskController} from "../presentation/TaskController";
import {InMemoryRepository} from "./InMemoryRepository";
import {CreateTaskUseCase} from "../application/CreateTaskUseCase";
import {GetTasksUseCase} from "../application/GetTasksUseCase";
import {GetTaskByIdUseCase} from "../application/GetTaskByIdUseCase";
import {UpdateTaskUseCase} from "../application/UpdateTaskUseCase";
import {DeleteTaskUseCase} from "../application/DeleteTaskUseCase";

export const setupRoutes = (app: express.Application) => {
  const taskRepository = new InMemoryRepository();
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);
  const getTasksUseCase = new GetTasksUseCase(taskRepository);
  const getTaskByIdUseCase = new GetTaskByIdUseCase(taskRepository);
  const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
  const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

  const taskController = new TaskController(
    createTaskUseCase,
    getTasksUseCase,
    getTaskByIdUseCase,
    updateTaskUseCase,
    deleteTaskUseCase,
  )

  app.get('/tasks', (req, res) => taskController.getTasks(req, res));
  app.post('/tasks',
    (req, res) => taskController.createTask(req, res));
  app.get('/tasks/:id', (req, res) => taskController.getTaskById(req, res));
  app.put('/tasks/:id', (req, res) => taskController.updateTask(req, res));
  app.delete('/tasks/:id', (req, res) => taskController.deleteTask(req, res));
}
