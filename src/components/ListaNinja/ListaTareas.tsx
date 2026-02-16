import { useState } from "react";
import { TareaCard } from "./TareaCard";

export default function NinjaTask() {
  const [totalTareas, setTotalTareas] = useState(0);

  const TareasTotales = () => setTotalTareas(totalTareas + 1);

  return (
    <>
      <h1 className="text-center">Mis desafios</h1>
      <div className="d-flex justify-content-center gap-5">
        <TareaCard text="Entrenar Katana" completar={TareasTotales} />
        <TareaCard text="Afilar Kunai" completar={TareasTotales} />
        <TareaCard text="Practicar Tiro" completar={TareasTotales} />
      </div>
      <h3>Tareas completadas: {totalTareas}</h3>
    </>
  );
}
