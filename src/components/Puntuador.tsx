import { useState } from "react";
import type { Marcador } from "../types/Marcador";
import { CalcularMarcador } from "../logic/CalcularMarcador";
import { GoalButton } from "./GoalButton";

export default function Puntuador() {
  const [marcador, setMarcador] = useState<Marcador>({
    local: 0,
    visitante: 0,
  });

  const handleLocalGoal = () => {
    setMarcador({ ...marcador, local: marcador.local + 1 });
  };
  const hadleVisitanteGoal = () => {
    setMarcador({ ...marcador, visitante: marcador.visitante + 1 });
  };

  const resultado = CalcularMarcador(marcador);

  return (
    <>
      <div className="w-25">
        <h1>Resultados</h1>
        <GoalButton
          marcador={marcador}
          onGoalLocal={handleLocalGoal}
          onGoalVisitante={hadleVisitanteGoal}
        />
        <p>{resultado}</p>
      </div>
    </>
  );
}
