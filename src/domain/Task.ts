export class Task {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly completed: boolean,
    public readonly createdAt: Date
  ) {}

  static create(title: string): Task {
    return new Task(
      crypto.randomUUID(),
      title,
      false,
      new Date()
    );
  }

  complete(): Task {
    return new Task(
      this.id,
      this.title,
      true,
      this.createdAt
    );
  }
}