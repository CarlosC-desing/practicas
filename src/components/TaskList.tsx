import type { Task } from "../types/task";

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}

export const TaskList = ({ tasks, onDelete }: Props) => (
  <div className="d-flex flex-column gap-3">
    <h2>Tareas Agregadas</h2>
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.task}
          <button onClick={() => onDelete(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  </div>
);
