import type { Task } from "../types/task";

export const createNewTask = (text: string): Task => ({
  id: Date.now(),
  task: text.trim(),
});

export const filterTasksById = (list: Task[], id: number): Task[] => {
  return list.filter((task) => task.id !== id);
};
