import type { Marcador } from "../types/Marcador";

interface Props {
  marcador: Marcador;
  onGoalLocal: () => void;
  onGoalVisitante: () => void;
}

export const GoalButton = ({
  marcador,
  onGoalLocal,
  onGoalVisitante,
}: Props) => {
  return (
    <div>
      <div className="d-flex justify-content-center gap-5">
        <div>
          <h2>Local</h2>
          <p className="text-center">{marcador.local}</p>
        </div>
        <div>
          <h2>Visitante</h2>
          <p className="text-center">{marcador.visitante}</p>
        </div>
      </div>

      <div>
        <button onClick={onGoalLocal}>Gol Local</button>
        <button onClick={onGoalVisitante}>Gol Visitante</button>
      </div>
    </div>
  );
};
