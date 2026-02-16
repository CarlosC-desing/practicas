import { useState } from "react";
import type { Mission } from "../../types/Mission";
import { ListaDeMisiones } from "./MissionsList";

export default function PanelMisiones() {
  const [misiones, setMisiones] = useState("");
  const [list, setList] = useState<Mission[]>([]);

  const handleClick = () => {
    if (misiones === "") return;
    const nuevaMision = {
      id: crypto.randomUUID(),
      text: misiones,
      completed: false,
    };
    setList([...list, nuevaMision]);
    setMisiones("");
  };

  const handleCompleted = (id: string) => {
    const listaNueva = list.map((m) =>
      m.id === id ? { ...m, completed: !m.completed } : m,
    );
    setList(listaNueva);
  };

  return (
    <>
      <div>
        <h1>Panel de Misiones</h1>
        <input
          type="text"
          value={misiones}
          onChange={(e) => setMisiones(e.target.value)}
        />
        <button onClick={handleClick}>Agregar</button>
        <ListaDeMisiones mission={list} onCompleted={handleCompleted} />
      </div>
    </>
  );
}
