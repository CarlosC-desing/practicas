import { useState } from "react";
import { createNewTask, filterTasksById } from "../logic/taskUtils";
import { TaskList } from "./TaskList";
import type { Task } from "../types/task";

function ListOfElements() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setList([...list, createNewTask(input)]);
    setInput("");
  };

  return (
    <div className="d-flex gap-5">
      <div className="d-flex flex-column gap-3">
        <h2>Agregar Tareas</h2>
        <form onSubmit={handleAdd} className="d-flex flex-column gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nueva tarea..."
          />
          <button type="submit">Agregar Tarea</button>
        </form>
      </div>

      <TaskList
        tasks={list}
        onDelete={(id: number) => setList(filterTasksById(list, id))}
      />
    </div>
  );
}

export default ListOfElements;
